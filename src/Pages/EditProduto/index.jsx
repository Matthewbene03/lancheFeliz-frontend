import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isNumeric } from "validator"
import { AiFillPicture } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";

import { Div, Form, Title1 } from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import * as actions from "../../store/modules/authorization/actions"
import axios from "../../config/axios"
import { get } from "lodash";

function EditProduto() {
    const location = useLocation();
    const produto = location.state?.produto
    const tempoMinutos = converterMiliSegundosMinutos(produto.tempoPreparo);

    const [nome, setNome] = useState(produto.nome);
    const [preco, setPreco] = useState(String(produto.preco));
    const [tempoPreparo, setTempoPreparo] = useState(String(tempoMinutos));
    const [tipoProduto, setTipoProduto] = useState(produto.categoria);
    const [fotoCaminho, setFotoCaminho] = useState("");
    const [foto, setFoto] = useState({});

    const navigate = useNavigate();
    const from = location.state?.from || "/"
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);

    useEffect(() => {
        function setFoto() {
            setFotoCaminho(get(produto, "Fotos[0].url", ""))
        }
        setFoto();
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErros = false;

        if (nome.length < 3 || nome.length > 250) {
            formErros = true;
            toast.error("Nome tem que ter entre 3 e 250 caracteres")
        }
        if (!isNumeric(preco)) {
            formErros = true;
            toast.error("Valor tem que ser número!")
        }
        if (!isNumeric(tempoPreparo)) {
            formErros = true;
            toast.error("Tempo de preparo tem que ser número!")
        }
        if (!tipoProduto) {
            formErros = true;
            toast.error("Selecione o tipo desse produto")
        }

        if (formErros) return;

        const novoTempoPreparo = converterMinutosMiliSegundos();
        const novoProduto = {
            nome,
            preco,
            categoria: tipoProduto,
            ativo: true,
            tempoPreparo: novoTempoPreparo
        }

        const formData = new FormData();
        formData.append("produto_id", produto.id);
        formData.append("arquivo", foto);

        try {
            await axios.post("/foto", formData, {
                "Content-Type": "multipart/form-data"
            })
            await axios.put(`produto/${produto.id}`, novoProduto)
            toast.success("Edição realizada")
            navigate(from, { replace: true })
        } catch (e) {
            const errors = get(e, "response.data.errors", []);
            errors.map(error => toast.error(error))
        }
    }

    const converterMinutosMiliSegundos = () => {
        const novoTempoSegundos = 60 * 1000 * tempoPreparo;
        return novoTempoSegundos
    }

    function converterMiliSegundosMinutos(tempo) {
        const novoTempoSegundos = (tempo) / (60 * 1000);
        return novoTempoSegundos
    }

    const handleFoto = async (e) =>{
        const file = e.target.files[0];
        const fotoURL = URL.createObjectURL(file);

        setFoto(file);
        setFotoCaminho(fotoURL);
    }

    return (
        <Div>
            <div className="container">
                <Title1>Edita os dados do produto</Title1>
                <Form onSubmit={handleSubmit}>
                    <div id="fotoProduto">
                        <div>
                            {fotoCaminho ? (<img src={fotoCaminho} alt="" />) : (<p> Sem foto. <br />Adicione! <br/> <RiImageAddFill/> </p>)}
                        </div>
                        <label id="labelArquivofoto" htmlFor="arquivofoto">
                            {/*Editar o label para arquivo de fotos*/}
                            Selecione uma foto <AiFillPicture className="fillPicture"/>
                            <input type="file" id="arquivofoto" onChange={handleFoto}/>
                        </label>
                    </div>
                    <label>
                        Nome:
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome do produto" />
                    </label>
                    <label>
                        Valor(R$):
                        <input type="text" value={preco} onChange={e => setPreco(e.target.value)} placeholder="Digite seu email" />
                    </label>
                    <label>
                        Tempo para preparo (Em minutos):
                        <input type="text" value={tempoPreparo} onChange={e => setTempoPreparo(e.target.value)} placeholder="Digite sua senha para login" />
                    </label>
                    <label>
                        Informe a categoria do produto:
                        <select value={tipoProduto} onChange={e => setTipoProduto(e.target.value)}>
                            <option value="" disabled>Selecione o tipo</option>
                            <option value={TiposProdutos.Assados}>Assado</option>
                            <option value={TiposProdutos.Bebidas}>Bebida</option>
                            <option value={TiposProdutos.Pizzas}>Pizza</option>
                            <option value={TiposProdutos.Salgados}>Salgado</option>
                        </select>
                    </label>
                    <button type="submit">Editar produto</button>
                </Form>
            </div>
        </Div>
    )
}

export default EditProduto;
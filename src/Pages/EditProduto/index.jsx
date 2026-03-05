import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isNumeric } from "validator"

import { Div, Form, Title1 } from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import * as actions from "../../store/modules/authorization/actions"
import axios from "../../config/axios"

function EditProduto() {
    const location = useLocation();
    const produto = location.state?.produto
    const tempoMinutos = converterMiliSegundosMinutos(produto.tempoPreparo);

    const [nome, setNome] = useState(produto.nome);
    const [preco, setPreco] = useState(String(produto.preco));
    const [tempoPreparo, setTempoPreparo] = useState(String(tempoMinutos));
    const [tipoProduto, setTipoProduto] = useState(produto.categoria);

    const tempo = converterMiliSegundosMinutos(produto.tempoPreparo);

    const navigate = useNavigate();
    const from = location.state?.from || "/"
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);

    useEffect(() => {
        function mudarRota() {
            if (!isLoggedIn) {
                navigate("/login")
            }
        }
        mudarRota();
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

        // console.log(produto.id)

        try {
            const { data } = await axios.put(`produto/${produto.id}`, novoProduto)
            console.log(data)
            toast.success("Edição realizada")
            navigate(from, { replace: true })
        } catch (e) {
            toast.error("Error")
            console.log(e);
        }
    }

    const converterMinutosMiliSegundos = () => {
        const novoTempoSegundos = 60 * 1000 * tempoPreparo;
        return novoTempoSegundos
    }

    function converterMiliSegundosMinutos (tempo) {
        const novoTempoSegundos = (tempo) / (60 * 1000);
        return novoTempoSegundos
    }

    return (
        <Div>
            <div className="container">
                <Title1>Edita os dados do produto</Title1>
                <Form onSubmit={handleSubmit}>
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isNumeric } from "validator"

import { Div, Form, Title1 } from "./styled"
import * as actions from "../../store/modules/authorization/actions"
import * as TiposProdutos from "../../config/TiposProdutos"
import axios from "../../config/axios"
import { get } from "lodash";

function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [tempoPreparo, setTempoPreparo] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn)

    // useEffect(() => {
    // //     function mudarRota() {
    // //         if (isLoggedIn) {
    // //             navigate("")
    // //         }
    // //     }
    // //     mudarRota();
    // // }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErros = false;

        if (nome.length < 3 || nome.length > 250) {
            formErros = true;
            toast.error("Nome tem que ter entre 3 e 250 caracteres")
        }
        if (!isNumeric(preco)) {
            formErros = true;
            toast.error("Informe um número")
        }
        if (!isNumeric(tempoPreparo)) {
            formErros = true;
            toast.error("Informe um número")
        }
        if (!tipoProduto) {
            formErros = true;
            toast.error("Selecione o tipo desse produto")
        }

        if (formErros) return;

        const novoTempoPreparo = converterTempoPreparo();

        const produto = {
            nome,
            preco,
            categoria: tipoProduto,
            ativo: true,
            tempoPreparo: novoTempoPreparo
        }

        try {
            await axios.post("/produto", produto)
            toast.success("Cadastro realizado com sucesso!");
            setNome("");
            setPreco("");
            setTempoPreparo("");
            setTipoProduto("");
        } catch (e) {
            toast.error("Usuário ou tempoPreparo inválidos.");
        }
    }

    const converterTempoPreparo = () => {
        const novoTempoSegundos = 60 * 1000 * tempoPreparo;
        return novoTempoSegundos
    }

    return (
        <Div>
            <div className="container">
                <Title1>Cadastro de Produto</Title1>
                <Form onSubmit={handleSubmit}>
                    <label>
                        Nome do produto:
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o titulo para esse produto" />
                    </label>
                    <label>
                        Valor (R$):
                        <input type="text" value={preco} onChange={e => setPreco(e.target.value)} placeholder="Digite seu valor" />
                    </label>
                    <label>
                        Tempo para preparo (Em minutos):
                        <input type="text" value={tempoPreparo} onChange={e => setTempoPreparo(e.target.value)} placeholder="Digite sua tempo de preparo" />
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
                    <button type="submit">Criar conta</button>
                </Form>
            </div>
        </Div>
    )
}

export default CadastroProduto;
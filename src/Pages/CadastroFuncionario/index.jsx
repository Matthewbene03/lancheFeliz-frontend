import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isEmail } from "validator"

import { Div, Form, Title1 } from "./styled"
import * as actions from "../../store/modules/authorization/actions"
import * as TiposUsuario from "../../config/TiposUsuarios"
import axios from "../../config/axios"
import { get } from "lodash";

function CadastroFuncionario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoFuncionario, setTipoFuncionario] = useState("");

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
        if (!isEmail(email)) {
            formErros = true;
            toast.error("Email inválido!")
        }
        if (senha.length < 6 || senha.length > 50) {
            formErros = true;
            toast.error("Senha tem que ter entre 6 e 50 caracteres")
        }
        if (!tipoFuncionario) {
            formErros = true;
            toast.error("Selecione um tipo para o funcionário")
        }

        if (formErros) return;

        try {
            await axios.post("/usuario/funcionario", { nome, email, senha, tipo: tipoFuncionario })
            toast.success("Cadastro realizado com sucesso!");
            setNome("");
            setEmail("");
            setSenha("");
            setTipoFuncionario("");
        } catch (e) {
            toast.error("Usuário ou senha inválidos.");
        }
    }

    return (
        <Div>
            <div className="container">
                <Title1>Cadastro de Funcionario</Title1>
                <Form onSubmit={handleSubmit}>
                    <label>
                        Nome completo:
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome completo" />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
                    </label>
                    <label>
                        Senha para o funcionário:
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha para login" />
                    </label>
                    <label>
                        Informe o tipo do funcionário:
                        <select value={tipoFuncionario} onChange={e => setTipoFuncionario(e.target.value)}>
                            <option value="" disabled>Selecione o tipo</option>
                            <option value={TiposUsuario.Garcom}>Garçom</option>
                            <option value={TiposUsuario.Cozinha}>Cozinha</option>
                            <option value={TiposUsuario.Caixa}>Caixa</option>
                            <option value={TiposUsuario.Gerente}>Gerente</option>
                        </select>
                    </label>
                    <button type="submit">Criar conta</button>
                </Form>
            </div>
        </Div>
    )
}

export default CadastroFuncionario;
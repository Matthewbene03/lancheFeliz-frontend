import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { isEmail } from "validator"

import { Div, Form, Title1 } from "./styled"
import * as TiposUsuario from "../../config/TiposUsuarios"
import * as actions from "../../store/modules/authorization/actions"
import axios from "../../config/axios"

function EditFuncionario() {
    const location = useLocation();
    const user = location.state?.usuario

    const [nome, setNome] = useState(user.nome);
    const [email, setEmail] = useState(user.email);
    const [senha, setSenha] = useState("");
    const [tipoFuncionario, setTipoFuncionario] = useState(user.tipo);

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
        if (!isEmail(email)) {
            formErros = true;
            toast.error("Email inválido!")
        }

        if (formErros) return;

        const usuario = {
            nome, 
            email, 
            senha: senha || undefined,
            tipo: tipoFuncionario
        }

        try{
            const {data} = await axios.put(`usuario/${user.id}`, usuario)
            console.log(data)
            toast.success("Edição realizada")
            navigate(from, {replace: true})
        } catch(e){
            toast.error("Error")
            console.log(e.response?.data);
        }
    }

    return (
        <Div>
            <div className="container">
                <Title1>Edita os dados do funcionarios</Title1>
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
                        Senha:
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
                    <button type="submit">Editar conta</button>
                </Form>
            </div>
        </Div>
    )
}

export default EditFuncionario;
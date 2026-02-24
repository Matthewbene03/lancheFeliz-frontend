import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmail } from "validator";
import { toast } from "react-toastify";

import { Div, Title1, Title2, Form, DivCadastro, LinkCadastro } from "./styled"
import * as actions from "../../store/modules/authorization/actions"

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/"

    useEffect(() => {
        function mudarRota() {
            if (isLoggedIn) {
                navigate(from, {replace: true})
            }
        }
        mudarRota();
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error("Email inválido!")
        }
        if (senha.length < 6 || senha.length > 50) {
            formErros = true;
            toast.error("Senha tem que ter entre 6 e 50 caracteres")
        }

        if (formErros) return;

        const dispatchReturn = dispatch(actions.loginRequest({ email, senha }));

    }

    return (
        <Div>
            <div className="container">
                <Title1>Faça o seu login</Title1>
                <Form onSubmit={handleSubmit}>
                    <label>
                        Seu email de cadastro:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
                    </label>
                    <label>
                        Sua senha:
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha" />
                    </label>
                    <button type="submit">Entrar</button>
                </Form>

                <DivCadastro>
                    <Title2> Não tem cadastro ainda? Faça agora</Title2>
                    <LinkCadastro to={"/register"}>Faça o seu cadastro</LinkCadastro>
                </DivCadastro>
            </div>
        </Div>
    )
}

export default Login;
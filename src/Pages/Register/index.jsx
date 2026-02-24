import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import {isEmail} from "validator"

import { Div, Form, Title1 } from "./styled"
import * as actions from "../../store/modules/authorization/actions"
import axios from "../../config/axios"
import { get } from "lodash";

function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn)

    useEffect(() => {
        function mudarRota() {
            if(isLoggedIn){
                navigate("")
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
        if (senha.length < 6 || senha.length > 50) {
            formErros = true;
            toast.error("Senha tem que ter entre 6 e 50 caracteres")
        }

        if(formErros) return;

        
        //Fazer com o Redux para quando cadastrar, já fazer o login do usuário.
        
        const dispatchReturn = dispatch(actions.registerRequest({nome, email, senha}));
        console.log(dispatchReturn);
        // console.log(isLoggedIn);

        // try{
        //     await axios.post("usuario/cliente", {
        //         nome,
        //         email,
        //         senha,
        //     })
        //     toast.success("Você fez seu cadastro.");
        //     navigate("/")
        // } catch(err){
        //     const errors = get(err, "response.date.errors", [])
        //     errors.map(error => toast.error(error))
        // }
        console.log("Cadastro realizado")
    }

    return (
        <Div>
            <div className="container">
                <Title1>Faça o seu cadastro</Title1>
                <Form onSubmit={handleSubmit}>
                    <label>
                        Nome completo:
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome completo" />
                    </label>
                    <label>
                        Seu melhor email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
                    </label>
                    <label>
                        Sua senha:
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha para login" />
                    </label>
                    <button type="submit">Criar conta</button>
                </Form>
            </div>
        </Div>
    )
}

export default Register;
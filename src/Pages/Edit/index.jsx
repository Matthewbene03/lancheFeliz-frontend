import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import {isEmail} from "validator"

import { Div, Form, Title1 } from "./styled"
import * as actions from "../../store/modules/authorization/actions"
import axios from "../../config/axios"
import { get } from "lodash";

function Edit() {
    const {user} = useSelector(state => state.authorization)
    const [nome, setNome] = useState(user.nome);
    const [email, setEmail] = useState(user.email);
    const [senha, setSenha] = useState("");
    let trocouEmail = false;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn)

    useEffect(() => {
        function mudarRota() {
            if(!isLoggedIn){
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

        if(formErros) return;
        
        const {id} = user;

        if(email !== user.email){
            trocouEmail = true;
        }
        dispatch(actions.updateRequest({id, nome, email, senha, trocouEmail}));
    }

    return (
        <Div>
            <div className="container">
                <Title1>Edita o seus dados</Title1>
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
                    <button type="submit">Editar conta</button>
                </Form>
            </div>
        </Div>
    )
}

export default Edit;
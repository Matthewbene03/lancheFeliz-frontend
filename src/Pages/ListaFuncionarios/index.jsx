import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { FaRegFrown, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, LinkLogin, CabecalhoSemLogin, Container, Card, ParagrafoSemProduto } from "./styled"
import axios from "../../config/axios";
import * as TiposUsuarios from "../../config/TiposUsuarios"
import { get } from "lodash";

function ListaFuncionarios() {
    const [usuarios, setUsuarios] = useState([]);

    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const effectRan = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;
        getUsuarios();
    }, [])

    async function getUsuarios() {
        try {
            const { data } = await axios.get("/usuario")
            const usuariosFilter = data.filter((usuario) => {
                return usuario.ativo === true && usuario.tipo !== TiposUsuarios.Gerente && usuario.tipo !== TiposUsuarios.Cliente
            });
            setUsuarios(usuariosFilter)
        } catch (e) {
            const errors = get(e, "response.data.erros", []);
            errors.map(error => toast.error(error))
        }
    }

    function nomeProprio(nome) {
        return nome.charAt(0) + nome.slice(1).toLowerCase();
    }

    const handleEditUsuario = (e, usuario) => {
        navigate("/acoes/lista-funcionario/edit-funcionario", {
            state: {
                from: location.pathname,
                usuario
            }
        });
    }

    const handleExcluirUsuario = async (e, id) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`/usuario/${id}`);
            if (!data) {
                toast.success("Usuário deletado")
                getUsuarios();
            }
        } catch (e) {
            console.log(e);
            const errors = get(e, "response.data.erros", []);
            errors.map(error => toast.error(error))
        }
    }

    return (
        <Div $isLoggedIn={isLoggedIn}>
            {isLoggedIn ? (
                <div className="container">
                    <h2>Todos usuários cadastrado no sistema</h2>
                    <Container>
                        {usuarios.length ? usuarios.map((usuario, index) => (
                            <Card key={index}>
                                <div className="textoProduto">
                                    <h2>Usuario: #{usuario.id}</h2>
                                    <div>
                                        <p>Nome: <span>{usuario.nome}</span></p>
                                        <p>Email: <span> {usuario.email} </span></p>
                                        <p>Tipo: <span>{nomeProprio(usuario.tipo)}</span></p>
                                    </div>
                                </div>
                                <div className="btnEditExcluir">
                                    <div className="btnEdit" onClick={(e) => handleEditUsuario(e, usuario)}>
                                        <FaUserEdit /> Editar
                                    </div>
                                    <div className="btnExcluir" onClick={(e) => handleExcluirUsuario(e, usuario.id)}>
                                        <MdDelete /> Deletar
                                    </div>
                                </div>
                            </Card>
                        )) :
                            <ParagrafoSemProduto>
                                Não tem usuarios cadastrados <FaRegFrown />
                            </ParagrafoSemProduto>}
                    </Container>
                </div>
            ) : (
                <div className="container">
                    <CabecalhoSemLogin>
                        <div className="naoLogado">
                            Você não está logado <FaRegSadCry />
                        </div>
                        <LinkLogin to={"/login"} state={{ from: location.pathname }}> Vá para a pagina de login</LinkLogin>
                    </CabecalhoSemLogin>
                </div>
            )}
        </Div>
    )
}

export default ListaFuncionarios;
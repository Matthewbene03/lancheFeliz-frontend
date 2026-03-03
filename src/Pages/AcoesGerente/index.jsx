import { useSelector, useDispatch } from "react-redux";
import { SlReload } from "react-icons/sl";
import { FaRegSadCry } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserPlus, FaUserEdit} from "react-icons/fa";
import { MdAddShoppingCart, MdModeEdit } from "react-icons/md";
import { PiUserListThin } from "react-icons/pi";

import { Div, Cabecalho, LinkLogin, AcoesUsuario, CabecalhoSemLogin } from "./styled"
import * as StatusPedidos from "../../config/StatusPedidos"
import * as actions from "../../store/modules/authorization/actions"

function AcoesGerente() {
    const { user } = useSelector(state => state.authorization);
    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCadastroFuncionario = (e) => {
        e.preventDefault();
        navigate("/acoes/cadastro-funcionario", {
            state: {
                from: location.pathname,
                statusPedido: StatusPedidos.EmAndamento
            }
        });
    }

    const handleEditFuncionario = (e) => {
        e.preventDefault();
        navigate("/pedidos/pedidos-feitos", {
            state: { 
                from: location.pathname,
                statusPedido: StatusPedidos.Finalizado
            }
        });
    }
 
    const handleCadastroProduto = (e) => {
        e.preventDefault();
        navigate("/acoes/cadastro-produto", {
            state: {
                from: location.pathname,
                statusPedido: StatusPedidos.EmAndamento
            }
        });
    }

    const handleEditProduto = (e) => {
        e.preventDefault();
        navigate("/pedidos/pedidos-feitos", {
            state: { 
                from: location.pathname,
                statusPedido: StatusPedidos.Finalizado
            }
        });
    }

    const handleListarUsuario = (e) => {
        e.preventDefault();
        navigate("/pedidos/pedidos-feitos", {
            state: { 
                from: location.pathname,
                statusPedido: StatusPedidos.Finalizado
            }
        });
    }

    return (
        <Div $isLoggedIn={isLoggedIn}>
            {isLoggedIn ? (
                <div className="container">
                    <Cabecalho>
                        <div id="tituloNome">
                            <h1>
                                Olá, <span>{user.nome}</span>
                            </h1>
                        </div>
                        <div className="emailUsuario">
                            Email: <span>{user.email}</span>
                        </div>
                    </Cabecalho>

                    <AcoesUsuario className="acoesUsuario">
                        <h2>Deseja realizar o que?</h2>
                        <div className="editarDados" onClick={handleCadastroFuncionario}>
                            <div>
                                <FaUserPlus /> Cadastro de Funcionário
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="editarDados" onClick={handleEditFuncionario}>
                            <div>
                                <FaUserEdit /> Edição de Funcionário
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="sairConta" onClick={handleCadastroProduto}>
                            <div>
                                <MdAddShoppingCart /> Cadastro de Produto
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="sairConta" onClick={handleEditFuncionario}>
                            <div>
                                <MdModeEdit /> Edição de Produto
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="sairConta" onClick={handleListarUsuario}>
                            <div>
                                <PiUserListThin /> Listagem de usuários
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </AcoesUsuario>
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

export default AcoesGerente;
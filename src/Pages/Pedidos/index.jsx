import { useSelector, useDispatch } from "react-redux";
import { SlReload } from "react-icons/sl";
import { FaRegSadCry } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, Cabecalho, LinkLogin, AcoesUsuario, CabecalhoSemLogin } from "./styled"
import * as StatusPedidos from "../../config/StatusPedidos"
import * as TiposUsuarios from "../../config/TiposUsuarios"

function Pedidos() {
    const { user } = useSelector(state => state.authorization);
    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickEmAndamento = (e) => {
        e.preventDefault();
        navigate("/pedidos/pedidos-feitos", {
            state: {
                from: location.pathname,
                statusPedido: StatusPedidos.EmAndamento
            }
        });
    }

    const handleClickFinalizado = (e) => {
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
                        {(user.tipo === TiposUsuarios.Cliente || user.tipo === TiposUsuarios.Garcom) && <h2>Deseja visualizar os seus pedidos?</h2>}
                        {(user.tipo === TiposUsuarios.Cozinha || user.tipo === TiposUsuarios.Caixa) && <h2>Pedidos realizados</h2>}
                        {(user.tipo === TiposUsuarios.Cozinha || user.tipo === TiposUsuarios.Cliente || user.tipo === TiposUsuarios.Garcom) &&
                            <div className="editarDados" onClick={handleClickEmAndamento}>
                                <div>
                                    <SlReload /> Em andamento
                                </div>
                                <div>
                                    <IoIosArrowForward />
                                </div>
                            </div>}
                        {(user.tipo === TiposUsuarios.Caixa || user.tipo === TiposUsuarios.Cliente || user.tipo === TiposUsuarios.Garcom) &&
                            < div className="sairConta" onClick={handleClickFinalizado}>
                                <div>
                                    <IoIosLogOut /> Finalizado
                                </div>
                                <div>
                                    <IoIosArrowForward />
                                </div>
                            </div>}
                    </AcoesUsuario>
                </div >
            ) : (
                <div className="container">
                    <CabecalhoSemLogin>
                        <div className="naoLogado">
                            Você não está logado <FaRegSadCry />
                        </div>
                        <LinkLogin to={"/login"} state={{ from: location.pathname }}> Vá para a pagina de login</LinkLogin>
                    </CabecalhoSemLogin>
                </div>
            )
            }
        </Div >
    )
}

export default Pedidos;
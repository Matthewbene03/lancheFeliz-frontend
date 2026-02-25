import { useSelector, useDispatch } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, Cabecalho, LinkLogin, AcoesUsuario, CabecalhoSemLogin} from "./styled"
import * as actions from "../../store/modules/authorization/actions"

function Perfil() {

    const { user } = useSelector(state => state.authorization);
    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickEditarDados = (e) => {
        e.preventDefault();
        navigate("/edit", {
            state: {from: location.pathname}
        });
        console.log("handleClickEditarDados")
    }

    const handleClickSairConta = (e) => {
        e.preventDefault();

        dispatch(actions.loginFailure())
        toast.success("Você saiu da sua conta!")
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
                        <h2>O que você deseja fazer?</h2>
                        <div className="editarDados" onClick={handleClickEditarDados}>
                            <div>
                                <VscAccount /> Editar Dados do seu perfil
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                        <div className="sairConta" onClick={handleClickSairConta}>
                            <div>
                                <IoIosLogOut /> Sair
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

export default Perfil;
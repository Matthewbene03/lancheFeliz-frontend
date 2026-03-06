import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { FaRegFrown } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, Cabecalho, LinkLogin, AcoesUsuario, CabecalhoSemLogin, ContainerPedidos, Card, ParagrafoSemProduto } from "./styled"
import axios from "../../config/axios";
import * as StatusPedidos from "../../config/StatusPedidos"
import * as TiposUsuarios from "../../config/TiposUsuarios"
import { get } from "lodash";

//Função Auxiliar
function dataAtual(data) {
    return new Date(data).toDateString() === new Date().toDateString();
}

function PedidosFeitos() {
    const [pedidos, setPedidos] = useState([]);

    const { user } = useSelector(state => state.authorization);
    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const statusPedido = location.state?.statusPedido
    const effectRan = useRef(false);

    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;
        getPedidos();
    }, [])

    async function getPedidos() {
        try {
            const { data } = await axios.get("/servico")
            const pedidosFilter = data.filter((pedido) => {
                return pedido.status === statusPedido
            });
            const pedidosFilterData = pedidosFilter.filter((pedido) => {
                return dataAtual(pedido.tempoInicioPreparo) || dataAtual(pedido.tempoFimPreparo)
            });
            setPedidos(pedidosFilterData)
        } catch (e) {
            const errors = get(e, "response.data.erros", []);
            errors.map(error => toast.error(error))
        }
    }

    function formatarData(data) {
        return new Date(data).toLocaleString("pt-BR");
    }

    const handleFinalizarPedido = async (e, idPedido) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/servico/${idPedido}`, {
                status: StatusPedidos.Finalizado,
                tempoFimPreparo: new Date().toISOString()
            })
            toast.success("Pedido finalizado!")
            getPedidos();
        } catch (e) {
            console.log(e.response?.data)
            toast.error("Error")
        }
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
                        <h2>Seus pedidos</h2>
                        <ContainerPedidos>
                            {pedidos.length ? pedidos.map((pedido, index) => (
                                <Card key={index}>
                                    <div className="textoProduto">
                                        <h2>Pedido: #{pedido.id}</h2>
                                        <div>
                                            <p>Numero da mesa: <span>{pedido.numeroMesa}</span></p>
                                            <p>Observação para o pedido: <span> {pedido.observacao} </span></p>
                                            <p>Status de andamento do pedido: <span> {pedido.status === StatusPedidos.EmAndamento ? (
                                                "Em andamento"
                                            ) : ("finalizado")} </span></p>
                                            {statusPedido === StatusPedidos.Finalizado ? (
                                                <p>Data e horário de finalização do pedido: <span>{formatarData(pedido.tempoFimPreparo)} </span> </p>
                                            ) : ("")}
                                        </div>
                                        {(user.tipo === TiposUsuarios.Cozinha) &&
                                            <div id="pedidoFinalizado">
                                                <button id="btnFinalizarPedido" onClick={e => handleFinalizarPedido(e, pedido.id)}>
                                                    <IoSend /> Finalizar pedido
                                                </button>
                                            </div>}
                                        <p className="preco">Valor total R$ {pedido.valorTotal}</p>
                                    </div>
                                </Card>
                            )) :
                                <ParagrafoSemProduto>
                                    {statusPedido === StatusPedidos.EmAndamento ? ("Não tem pedidos em andamento no dia") : ("Não tem pedidos finalizados no dia")}
                                    <FaRegFrown />
                                </ParagrafoSemProduto>}
                        </ContainerPedidos>
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

export default PedidosFeitos;
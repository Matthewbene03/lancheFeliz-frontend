import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { FaRegFrown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, Title1, Container, Card, ContainerItens, CabecalhoSemLogin, LinkLogin, Form, ButtonConfirmarPedido, ParagrafoSemProduto } from "./styled"
import * as StatusPedidos from "../../config/StatusPedidos"
import * as actionsCarrinho from "../../store/modules/carrinhoCompras/actions"
import axios from "../../config/axios";

function CarrinhoItens() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn)
    const { user } = useSelector(state => state.authorization)
    const { produto, dadosCompraProduto } = useSelector(state => state.carrinho)

    // useEffect(() => {
    //     function mudarRota() {
    //         console.log(produto)
    //         console.log(dadosCompraProduto)
    //     }
    //     mudarRota();
    // }, [isLoggedIn, navigate]);

    const handleConfirmarTodosPedidos = async (e) => {
        e.preventDefault();

        const quantidadePedidos = produto.length;

        for (let i = 0; i < quantidadePedidos; i++) {
            const pedido = {
                status: StatusPedidos.EmAndamento,
                numeroMesa: 10,
                valorTotal: dadosCompraProduto[i].valorCompra,
                observacao: "Sem tomate",
                tempoInicioPreparo: new Date().toISOString(),
                tempoFimPreparo: null,
                usuario_id: user.id
            }

            try {
                const { data } = await axios.post("/servico", pedido)
                dispatch(actionsCarrinho.removeProdutoRequest({ idProduto: produto[i].id }))
            } catch (e) {
                toast.error("Não deu para salvar o pedido!")
            }
        }
    }

    const handleSalvarPedidos = async (e, index) => {
        e.preventDefault();
        const pedido = {
            status: StatusPedidos.EmAndamento,
            numeroMesa: 10,
            valorTotal: dadosCompraProduto[index].valorCompra,
            observacao: "Sem tomate",
            tempoInicioPreparo: new Date().toISOString(),
            tempoFimPreparo: null,
            usuario_id: user.id
        }

        try {
            const { data } = await axios.post("/servico", pedido)
            dispatch(actionsCarrinho.removeProdutoRequest({ idProduto: produto[index].id }))
        } catch (e) {
            toast.error("Não deu para salvar o pedido!")
        }
    }

    const handleExcluirPedidos = async (e, index) => {
        e.preventDefault();
        dispatch(actionsCarrinho.removeProdutoRequest({ idProduto: produto[index].id }))
    }

    return (
        <Div $isLoggedIn={isLoggedIn}>
            {isLoggedIn ? (
                <div className="container">
                    <Title1>Carrinho de compras</Title1>
                    <Container>
                        {produto.length ? produto.map((produto, index) => (
                            <Card key={index}>
                                <div className="textoProduto">
                                    <h2>{produto.nome}</h2>
                                    <div>
                                        <p>{produto.categoria}</p>
                                        <p>Quantidade desse produto: {dadosCompraProduto[index].qtdItens}</p>
                                        <p className="preco">Valor total R$ {dadosCompraProduto[index].valorCompra}</p>
                                    </div>
                                    <ContainerItens>
                                        <form action="post">
                                            <div className="btnAdd">
                                                <button id="btnSalvarPedido" type="submit" onClick={e => handleSalvarPedidos(e, index)}>Salvar Pedido</button>
                                            </div>
                                            <div className="btnExcluir">
                                                <button id="btnExcluirPedido" type="submit" onClick={e => handleExcluirPedidos(e, index)}><MdDelete /> </button>
                                            </div>
                                        </form>
                                    </ContainerItens>
                                </div>
                                <div className="imagemProduto">
                                    <img src="../../../public/vite.svg" />
                                </div>
                            </Card>
                        )) :
                            <ParagrafoSemProduto>
                                Você ainda não adicionou produtos ao seu carrinho
                                <FaRegFrown />
                            </ParagrafoSemProduto>}
                    </Container>
                    {produto.length ? (
                        <Form onSubmit={handleConfirmarTodosPedidos}>
                            <ButtonConfirmarPedido type="submit"> Confirmar todos os pedido </ButtonConfirmarPedido>
                        </Form>
                    ) : ("")}
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

export default CarrinhoItens;
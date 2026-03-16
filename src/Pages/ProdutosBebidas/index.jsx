import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { get } from "lodash";
import { FaRegFrown } from "react-icons/fa";
import { MdOutlineImageNotSupported } from "react-icons/md";


import { Div, Title1, ContainerCard, Card, ParagrafoSemProduto, ContainerItens } from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import * as actions from "../../store/modules/carrinhoCompras/actions"
import axios from "../../config/axios"
import { toast } from "react-toastify";

function ProdutosBebidas() {
    const [produtos, setProdutos] = useState([]);
    const [dadosCompraProduto, setDadosCompraProduto] = useState([{}])
    // const [valorCompra, setValorCompra] = useState(0);
    // const [qtdItens, setQtdItens] = useState();
    // const { id } = useParams();

    const isLoggedIn = useSelector(state => state.authorization.isLoggedIn); //Recebe um sinal, tiver usuário logado;
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {        
        async function getProdutosBebidas() {
            const { data } = await axios.get("/produto")
            const produtosFilter = data.filter((produto) => {
                return produto.categoria === TiposProdutos.Bebidas && produto.ativo === true
            });
            const dadosCompra = produtosFilter.map((produto) => {
                return { idProduto: produto.id, qtdItens: 1, valorCompra: produto.preco }
            })

            setProdutos(produtosFilter)
            setDadosCompraProduto(dadosCompra)
        }
        getProdutosBebidas();
    }, []);

    const handleAddItens = (e, index) => {
        e.preventDefault();
        const novosDados = [...dadosCompraProduto]
        novosDados[index].valorCompra += produtos[index].preco;
        novosDados[index].qtdItens++;
        setDadosCompraProduto(novosDados);
    }

    const handleSubItens = (e, index) => {
        e.preventDefault();
        const novosDados = [...dadosCompraProduto]
        if (novosDados[index].qtdItens <= 1) {
            return;
        }
        novosDados[index].valorCompra -= produtos[index].preco;
        novosDados[index].qtdItens--;
        setDadosCompraProduto(novosDados);
    }

    const handleSalvarPedidos = (e, index) => {
        e.preventDefault();

        if (!isLoggedIn) {
            toast.warning("Você precisa fazer login!");
            navigate("/login", {
                state: { from: location.pathname } //Passa para o login a rota atual 
            });
            return;
        }

        const pedidoCarrinho = {
            produto: produtos[index],
            dadosCompraProduto: dadosCompraProduto[index]
        }

        dispatch(actions.addCarrinhoRequest(pedidoCarrinho))
        toast.success("Pedido adicionado ao seu carrinho")
    }

    return (
        <Div>
            <div className="container">
                <Title1>Bebidas</Title1>
                <ContainerCard>
                    {produtos.length ? produtos.map((produto, index) => (
                        <Card key={index}>
                            <div className="textoProduto">
                                <h2>{produto.nome}</h2>
                                <div>
                                    <p>{produto.categoria}</p>
                                    <p className="preco">R$ {produto.preco}</p>
                                </div>
                                <ContainerItens>
                                    <form action="post">
                                        <div className="addItens">
                                            <button type="button" id="subItens" onClick={e => handleSubItens(e, index)}>-</button>
                                            <input type="text" value={dadosCompraProduto[index].qtdItens} name="qtdItens" id="qtdItens" disabled />
                                            <button type="button" id="addItens" onClick={e => handleAddItens(e, index)}>+</button>
                                        </div>
                                        <div className="btnAdd">
                                            <button id="btnSalvarPedido" type="submit" onClick={e => handleSalvarPedidos(e, index)}>Salvar Pedido R$ {dadosCompraProduto[index].valorCompra}</button>
                                        </div>
                                    </form>
                                </ContainerItens>
                            </div>
                            <div className="imagemProduto">
                                {get(produto, "Fotos[0].url", "") ? (<img src={produto.Fotos[0].url}/>) : (<MdOutlineImageNotSupported id="NotImg" />)}
                            </div>
                        </Card>
                    )) :
                        <ParagrafoSemProduto>
                            Não tem produtos desse tipo na loja
                            <FaRegFrown />
                        </ParagrafoSemProduto>}
                </ContainerCard>
                <footer></footer>
            </div>
        </Div>
    )
}

export default ProdutosBebidas;
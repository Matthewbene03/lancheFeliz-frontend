import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaRegFrown } from "react-icons/fa";

import { Div, Title1, ContainerCard, Card, ParagrafoSemProduto, ContainerItens } from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import axios from "../../config/axios"

function ProdutosAssados() {
    const usuario = ""; //Recebe um sinal, tiver usuário logado;
    const [produtos, setProdutos] = useState([]);
    const [dadosCompraProduto, setDadosCompraProduto] = useState([{}])
    // const [valorCompra, setValorCompra] = useState(0);
    // const [qtdItens, setQtdItens] = useState();
    // const { id } = useParams();

    useEffect(() => {
        async function getProdutosAssados() {
            const { data } = await axios.get("/produto")
            const produtosFilter = data.filter((produto) => {
                return produto.categoria === TiposProdutos.Assados
            });
            const dadosCompra = produtosFilter.map((produto) => {
                return { qtdItens: 1, valorCompra: produto.preco }
            })

            setProdutos(produtosFilter)
            setDadosCompraProduto(dadosCompra)
        }
        getProdutosAssados();
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

    const handleSalvarPedidos = (e) =>{
        e.preventDefault();
        console.log("handleSalvarPedidos")
    }

    return (
        <Div>
            <div className="container">
                <Title1>Assados</Title1>
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
                                            <button id="btnSalvarPedido" type="submit" onClick={handleSalvarPedidos}>Salvar Pedido R$ {dadosCompraProduto[index].valorCompra}</button>
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
                            Não tem produtos desse tipo na loja
                            <FaRegFrown />
                        </ParagrafoSemProduto>}
                </ContainerCard>
                <footer>Area do footer</footer>
            </div>
        </Div>
    )
}

export default ProdutosAssados;
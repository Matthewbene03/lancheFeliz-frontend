import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaRegFrown } from "react-icons/fa";

import { Div, Title1, ContainerCard, Card, ParagrafoSemProduto, LinkProduto} from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import axios from "../../config/axios"

function ProdutoBebida() {
    // const [produtos, setProdutos] = useState([]);

    // useEffect(() => {
    //     async function getProdutosBebidas() {
    //         const { data } = await axios.get("/produto")
    //         const produtosFilter = data.filter((produto, index) => {
    //             return produto.categoria === TiposProdutos.Bebidas
    //         });
    //         setProdutos(produtosFilter)
    //     }
    //     getProdutosBebidas();
    // }, []);

    return (
        <Div>
            {/* <div className="container">
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
                                <LinkProduto to={`produto/${produto.id}`}>Selecionar</LinkProduto>
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
            </div> */}
            <h1>Pagina de uma Bebida</h1>
        </Div>
    )
}

export default ProdutoBebida;
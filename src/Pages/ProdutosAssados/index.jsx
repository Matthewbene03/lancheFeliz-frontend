import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { get } from "lodash";

import { Div, Title1, ContainerCard, Card} from "./styled"
import * as TiposProdutos from "../../config/TiposProdutos"
import axios from "../../config/axios"

function ProdutosAssados() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutosAssados() {
            const { data } = await axios.get("/produto")
            const produtosFilter = data.filter((produto, index) =>{
                return produto.categoria === TiposProdutos.Assados
            });
            setProdutos(produtosFilter)
        }
        getProdutosAssados();
    }, []);

    return (
        <Div>
            <div className="container">
                <Title1>Assados</Title1>
                <ContainerCard>
                    {produtos.length ? produtos.map((produto, index) => (
                        <Card key={index}>
                            <div className="textoProduto">
                                <h2>{produto.nome}</h2>
                                <p>{produto.categoria}</p>
                                <p>{produto.preco}</p>
                                <Link to={`produto/${produto.id}`}>Selecionar</Link>
                            </div>
                            <div className="imagemProduto">
                                <p>{get(produto, "produto.Fotos[0].url", "")}</p>
                            </div>
                        </Card>
                    )) : 
                    <p> Não tem produtos desse tipo na loja</p>}
                </ContainerCard>
                <footer>Area do footer</footer>
            </div>
        </Div>
    )
}

export default ProdutosAssados;
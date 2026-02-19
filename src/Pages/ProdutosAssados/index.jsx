import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { get } from "lodash";

import { Div, Title1, ContainerCard, Card} from "./styled"
import axios from "../../config/axios"

function ProdutosAssados() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutosAssados() {
            const { data } = await axios.get("/produto")
            setProdutos(data)
            console.log(data)
        }
        getProdutosAssados();
    }, []);

    return (
        <Div>
            <div className="containerProdutosAssados">
                <Title1>Produtos Assados</Title1>
                <ContainerCard>
                    {produtos.map((produto, index) => (
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
                    ))}
                </ContainerCard>
                <footer>Area do footer</footer>
            </div>
        </Div>
    )
}

export default ProdutosAssados;
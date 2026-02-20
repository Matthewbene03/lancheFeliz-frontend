import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { get } from "lodash";
import { FaRegFrown } from "react-icons/fa";

import { Div, Title1, ContainerCard, Card, LinkProduto, ContainerItens } from "./styled"
import axios from "../../config/axios"

function ProdutoAssado() {
    const [produto, setProduto] = useState({});
    const [valorCompra, setValorCompra] = useState();
    const [qtdItens, setQtdItens] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        async function getProdutoAssado() {
            const { data } = await axios.get(`/produto/${id}`)
            setProduto(data)
            // setQtdItens(1);
            setValorCompra(data.preco)
        }
        getProdutoAssado();
    }, []);

    const handleAddItens = (e) => {
        e.preventDefault();
        const novoValor = valorCompra + produto.preco
        let auxQtdItens = qtdItens;
        auxQtdItens++;
        setValorCompra(novoValor)
        setQtdItens(auxQtdItens)
    }
    
    const handleSubItens = (e) => {
        e.preventDefault();
        const novoValor = valorCompra - produto.preco
        let auxQtdItens = qtdItens;
        if(auxQtdItens <= 1){
            return;
        }
        auxQtdItens--;
        setValorCompra(novoValor);
        setQtdItens(auxQtdItens);
    }

    return (
        <Div>
            <div className="container">
                <ContainerCard>
                    <Card>
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
                </ContainerCard>

                <ContainerItens>
                    <form action="post">
                        <div className="addItens">
                            <button type="button" id="subItens" onClick={handleSubItens}>-</button>
                            <input type="text" value={qtdItens} name="qtdItens" id="qtdItens" disabled />
                            <button type="button" id="addItens" onClick={handleAddItens}>+</button>
                        </div>
                        <div className="btnAdd">
                            <button id="btnSalvarPedido" type="submit">Salvar Pedido R$ {valorCompra}</button>
                        </div>
                    </form>
                </ContainerItens>
            </div>
        </Div>
    )
}

export default ProdutoAssado;
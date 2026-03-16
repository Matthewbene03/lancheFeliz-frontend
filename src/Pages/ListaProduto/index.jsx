import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";
import { FaRegFrown, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Div, LinkLogin, CabecalhoSemLogin, Container, Card, ParagrafoSemProduto } from "./styled"
import axios from "../../config/axios";
import * as TiposUsuarios from "../../config/TiposUsuarios"
import { get } from "lodash";

function ListaProduto() {
    const [produtos, setProdutos] = useState([]);

    const { isLoggedIn } = useSelector(state => state.authorization); //Recebe um sinal, tiver usuário logado;
    const location = useLocation();
    const effectRan = useRef(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;
        getProdutos();
    }, [])

    async function getProdutos() {
        try {
            const { data } = await axios.get("/produto")
            const produtosFilter = data.filter((produto) => {
                return produto.ativo === true
            });
            setProdutos(produtosFilter)
        } catch (e) {
            const errors = get(e, "response.data.erros", []);
            errors.map(error => toast.error(error))
        }
    }

    function nomeProprio(nome) {
        return nome.charAt(0) + nome.slice(1).toLowerCase();
    }

    const handleEditProduto = (e, produto) => {
        navigate("/acoes/lista-produto/edit-produto", {
            state: {
                from: location.pathname,
                produto
            }
        });
    }

    const handleExcluirProduto = async (e, id) => {
        e.preventDefault();
        try {
            const { data } = await axios.delete(`/produto/${id}`);
            if (!data) {
                toast.success("Produto deletado")
                getProdutos();
            }
        } catch (e) {
            console.log(e);
            const errors = get(e, "response.data.erros", []);
            errors.map(error => toast.error(error))
        }
    }

    return (
        <Div $isLoggedIn={isLoggedIn}>
            {isLoggedIn ? (
                <div className="container">
                    <h2>Todos produtos cadastrado no sistema</h2>
                    <Container>
                        {produtos.length ? produtos.map((produto, index) => (
                            <Card key={index}>
                                <div className="textoProduto">
                                    <h2>Produto: #{produto.id}</h2>
                                    <div>
                                        <p>Nome: <span>{produto.nome}</span></p>
                                        <p>Categoria: <span> {nomeProprio(produto.categoria)} </span></p>
                                        <p>Valor(R$): <span>{produto.preco}</span></p>
                                    </div>
                                </div>
                                <div className="btnEditExcluir">
                                    <div className="btnEdit" onClick={(e) => handleEditProduto(e, produto)}>
                                        <FaUserEdit /> Editar
                                    </div>
                                    <div className="btnExcluir" onClick={(e) => handleExcluirProduto(e, produto.id)}>
                                        <MdDelete /> Deletar
                                    </div>
                                </div>
                            </Card>
                        )) :
                            <ParagrafoSemProduto>
                                Não tem produtos cadastrados <FaRegFrown />
                            </ParagrafoSemProduto>}
                    </Container>
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

export default ListaProduto;
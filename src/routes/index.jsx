import { Routes, Route } from "react-router-dom";

import BemVindo from "../Pages/BemVindo/index"
import PaginaAssado from "../Pages/ProdutoAssado/index"
import PaginaAssados from "../Pages/ProdutosAssados/index"
import PaginaBebida from "../Pages/ProdutoBebida/index"
import PaginaBebidas from "../Pages/ProdutosBebidas/index"
import PaginaPizza from "../Pages/ProdutoPizza/index"
import PaginaPizzas from "../Pages/ProdutosPizzas/index"
import PaginaSalgado from "../Pages/ProdutoSalgado/index"
import PaginaSalgados from "../Pages/ProdutosSalgados/index"
import Pedidos from "../Pages/Pedidos/index"
import AcoesGerente from "../Pages/AcoesGerente/index"
import PedidosFeitos from "../Pages/PedidosFeitos/index"
import CarrinhoItens from "../Pages/CarrinhoItens/index";
import Perfil from "../Pages/Perfil/index";
import Login from "../Pages/Login/index";
import CadastroFuncionario from "../Pages/CadastroFuncionario/index";
import EditFuncionario from "../Pages/EditFuncionario/index";
import CadastroProduto from "../Pages/CadastroProduto/index";
import EditProduto from "../Pages/EditProduto/index";
import Register from "../Pages/Register/index";
import Edit from "../Pages/Edit/index";
import ListaUsuarios from "../Pages/ListaUsuarios/index";
import ListaFuncionarios from "../Pages/ListaFuncionarios/index";
import Error404 from "../Pages/Error404/index"

import PrivateRoute from "./PrivateRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<BemVindo />} />
            <Route exact path="/assados" element={<PaginaAssados />} />
            <Route exact path="/assados/:id" element={<PaginaAssado />} />
            <Route exact path="/bebidas" element={<PaginaBebidas />} />
            <Route exact path="/bebidas/:id" element={<PaginaBebida />} />
            <Route exact path="/pizzas" element={<PaginaPizzas />} />
            <Route exact path="/pizzas/:id" element={<PaginaPizza />} />
            <Route exact path="/saldados" element={<PaginaSalgados />} />
            <Route exact path="/saldados/:id" element={<PaginaSalgado />} />
            <Route exact path="/pedidos" element={<Pedidos />} />
            <Route exact path="/pedidos/pedidos-feitos" element={<PedidosFeitos />} />
            <Route exact path="/acoes" element={<AcoesGerente />} />
            <Route exact path="/carrinho-itens" element={<CarrinhoItens/>} />
            <Route exact path="/perfil" element={<Perfil/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/edit" element={<Edit/>} />
            <Route exact path="/acoes/cadastro-funcionario" element={<CadastroFuncionario/>} />
            <Route exact path="/acoes/lista-funcionario" element={<ListaFuncionarios/>} />
            <Route exact path="/acoes/lista-funcionario/edit-funcionario" element={<EditFuncionario/>} />
            <Route exact path="/acoes/cadastro-produto" element={<CadastroProduto/>} />
            <Route exact path="/acoes/edit-produto" element={<EditProduto/>} />
            <Route exact path="/acoes/lista-usuarios" element={<ListaUsuarios/>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;
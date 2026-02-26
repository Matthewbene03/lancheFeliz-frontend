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
import PedidosFeitos from "../Pages/PedidosFeitos/index"
import Perfil from "../Pages/Perfil/index";
import Login from "../Pages/Login/index";
import Register from "../Pages/Register/index";
import Edit from "../Pages/Edit/index";
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
            <Route exact path="/perfil" element={<Perfil/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/edit" element={<Edit/>} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;
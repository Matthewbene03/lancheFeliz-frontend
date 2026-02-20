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
import Error404 from "../Pages/Error404/index"

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
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;
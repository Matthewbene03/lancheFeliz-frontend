import { Routes, Route } from "react-router-dom";

import BemVindo from "../Pages/BemVindo/index"
import PaginaAssados from "../Pages/ProdutosAssados/index"
import PaginaBebidas from "../Pages/ProdutosBebidas/index"
import PaginaPizza from "../Pages/ProdutosPizza/index"
import PaginaSalgados from "../Pages/ProdutosSalgados/index"
import Error404 from "../Pages/Error404/index"

function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<BemVindo />} />
            <Route exact path="/assados" element={<PaginaAssados />} />
            <Route exact path="/bebidas" element={<PaginaBebidas />} />
            <Route exact path="/pizzas" element={<PaginaPizza />} />
            <Route exact path="/saldados" element={<PaginaSalgados />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;
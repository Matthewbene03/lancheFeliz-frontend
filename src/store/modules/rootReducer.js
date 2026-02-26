//Esse arquivo combina todos os reducer da aplicação

import { combineReducers } from "redux";

import { reducerAuthrization } from "./authorization/reducer";
import { reducerCarrinhoCompras } from "./carrinhoCompras/reducer";

export default combineReducers({
    authorization: reducerAuthrization,
    carrinho: reducerCarrinhoCompras,
})
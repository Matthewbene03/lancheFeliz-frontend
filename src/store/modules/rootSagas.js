import { all } from "redux-saga/effects";
import authorization from "./authorization/sagas";
import carrinho from "./carrinhoCompras/sagas";

export default function* rootSaga(){
    return yield all([authorization, carrinho])
}

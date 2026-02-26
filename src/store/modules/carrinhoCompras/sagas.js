import { call, put, all, takeLatest, take } from "redux-saga/effects"
import { toast } from "react-toastify"
import { get } from "lodash"

import * as actions from "./actions"
import * as types from "../types"
import axios from "../../../config/axios"
import store from "../../index"

function* addCarrinho({ payload }) {
    const { produto, dadosCompraProduto } = store.getState().carrinho;

    if (produto.length === 0 && dadosCompraProduto.length === 0) {
        yield put(actions.addCarrinhoSuccess({ ...payload }));
        return;
    }

    const jaExiste = produto.some(prod => prod.id === payload.produto.id);

    if (!jaExiste) {
        yield put(actions.addCarrinhoSuccess({ ...payload }));
        return;
    }
}

function* removeProdutoCarrinho({ payload }) {
    const { produto, dadosCompraProduto } = store.getState().carrinho;
    
    const novosProduto = produto.filter(produto => {
        return produto.id !== payload.idProduto
    })
    const novosDados = dadosCompraProduto.filter(dado => {
        return dado.idProduto !== payload.idProduto
    }) 
    yield put(actions.removeProdutoSuccess({ ... {produto: novosProduto, dadosCompraProduto: novosDados}}));
}

export default all([
    takeLatest(types.ADD_CARRINHO_REQUEST, addCarrinho),
    takeLatest(types.REMOVE_PRODUTO_REQUEST, removeProdutoCarrinho),
])
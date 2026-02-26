//Nesse arquivo serve para criar funções que vão retornar o tipo de cada ação a ser escutada pelo reducer.
// Ex: Para um clique de um botão

import * as types from "../types"

export function addCarrinhoSuccess(payload){
    return {
        type: types.ADD_CARRINHO_SUCCESS,
        payload
    }
}

export function addCarrinhoRequest(payload){
    return {
        type: types.ADD_CARRINHO_REQUEST,
        payload
    }
}

export function addCarrinhoFailure(payload){
    return {
        type: types.ADD_CARRINHO_FAILURE,
        payload
    }
}

export function removeProdutoSuccess(payload){
    return {
        type: types.REMOVE_PRODUTO_SUCCESS,
        payload
    }
}

export function removeProdutoRequest(payload){
    return {
        type: types.REMOVE_PRODUTO_REQUEST,
        payload
    }
}

export function removeProdutoFailure(payload){
    return {
        type: types.REMOVE_PRODUTO_FAILURE,
        payload
    }
}
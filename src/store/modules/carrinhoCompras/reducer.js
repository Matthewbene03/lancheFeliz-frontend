import * as types from "../types"

const initialState = {
    produto: [],
    dadosCompraProduto: []
};

export const reducerCarrinhoCompras = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CARRINHO_SUCCESS: {
            const newState = { ...state };
            newState.produto.push(action.payload.produto);
            newState.dadosCompraProduto.push(action.payload.dadosCompraProduto);
            return newState
        }
        case types.ADD_CARRINHO_REQUEST: {
            const newState = { ...state };
            return newState
        }
        case types.ADD_CARRINHO_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }
        case types.REMOVE_PRODUTO_SUCCESS: {
            const newState = { ...state };
            newState.produto = action.payload.produto;
            newState.dadosCompraProduto = action.payload.dadosCompraProduto;
            return newState
        }
        case types.REMOVE_PRODUTO_REQUEST: {
            const newState = { ...state };
            return newState
        }
        case types.REMOVE_PRODUTO_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        default: {
            return state
        }
    }
}
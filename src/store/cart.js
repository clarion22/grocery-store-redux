
const ADD_ITEM = 'cart/ADD_ITEM'

export function addToCart(id) {
    return {
        type: ADD_ITEM,
        id
    }
}

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            const newState = { ...state, [action.id]: { id: action.id, count: 1 } }
            return newState
        default:
            return state;
    }
}
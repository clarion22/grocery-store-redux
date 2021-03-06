
const ADD_ITEM = 'cart/ADD_ITEM';

const REMOVE_ITEM = 'cart/REMOVE_ITEM';

const CHECKOUT_CART = 'cart/CHECKOUT_CART';

export function addToCart(id) {
    return {
        type: ADD_ITEM,
        id
    };
};

export function removeFromCart(id) {
    return {
        type: REMOVE_ITEM,
        id
    };
};

export function checkoutCart() {
    return {
        type: CHECKOUT_CART,
    }
}

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ITEM:
            const newState = { ...state, [action.id]: { id: action.id, count: 1 } };
            return newState;
        case REMOVE_ITEM:
            const copiedState = { ...state };
            delete copiedState[action.id];
            return copiedState;
        case CHECKOUT_CART:
            return {};
        default:
            return state;
    }
}

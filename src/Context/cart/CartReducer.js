import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case SHOW_HIDE_CART: {
            return {
                ...state,
                showCart: !state.showCart,
            };
        }
        case ADD_TO_CART: {
            let items;

            if (state.cartItems.length) {
                state.cartItems.map((el) => {
                    if (el.product?._id === action.payload.product._id) {
                        el.quantity++;
                        items = 1;

                        return el;
                    }
                });
            }

            if (items !== 1) state.cartItems.push(action.payload);

            console.log("yayy", items);
            return {
                ...state,
                cartItems: [...state.cartItems],
            };
            // return {
            //   ...state,
            //   cartItems: [...state.cartItems, {quantity: action.payload.quantity, product: action.payload.product}],
            // };
        }
        case REMOVE_ITEM: {
            let index = state.cartItems.findIndex(
                (el) => el.product?._id === action.payload
            );
            state.cartItems[index].quantity != 1
                ? state.cartItems[index].quantity--
                : state.cartItems.splice(index, 1);

            return {
                ...state,
                cartItems: state.cartItems,
            };
        }

        default:
            return state;
    }
};

export default CartReducer;

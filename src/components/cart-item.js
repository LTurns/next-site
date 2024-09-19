import { useContext } from "react";
import CartContext from "../Context/cart/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <li className="CartItem__item">
            <div>{item.title}</div>
            <button
                className="CartItem__button"
                onClick={() => removeItem(item._id)}
            >
                Remove
            </button>
        </li>
    );
};

export default CartItem;

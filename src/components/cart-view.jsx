import {
    Box,
    Button,
    Grid,
    Typography,
    Container,
    Divider,
} from "@mui/material";
import { useContext } from "react";
import CartContext from "../Context/cart/CartContext";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";
// import CartItem from "./cart-item";

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
};

export const CartView = () => {
    const router = useRouter();
    const { removeItem, cartItems } = useContext(CartContext);

    console.log("wooo", cartItems);

    console.log(cartItems);
    return (
        <Container>
            <table className="cart-table">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Remove Item</th>
                </tr>
                {cartItems.map((item) => (
                    <tbody>
                        <tr>
                            <td>
                                {/* <button> */}
                                <img
                                    src={urlFor(item.product.mainImage)
                                        .width(75)
                                        .url()}
                                    alt={item.product.title}
                                    className="product-img"
                                />
                                {/* </button> */}
                            </td>
                            <td>
                                <button
                                    className="cart-table-button"
                                    onClick={() => {
                                        router.push(
                                            `/product/${item.product.title}`
                                        );
                                    }}
                                >
                                    <span>{item.product.title}</span>
                                </button>
                            </td>
                            <td>
                                {/* <CiCirclePlus /> */}
                                <strong style={{ padding: 20 }}>
                                    {" "}
                                    {item.quantity}
                                </strong>
                                {/* <CiCircleMinus /> */}
                            </td>
                            <td>
                                <button
                                    className="CartItem__button"
                                    onClick={() => removeItem(item.product._id)}
                                >
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>

            <Divider></Divider>

            <Box mt={2} mb={6}>
                <Button variant="outlined">Checkout</Button>
            </Box>
        </Container>
    );
};

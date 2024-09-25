import Image from 'next/image'
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

    return (
        <Container>
                        <p style={{padding: 20, textAlign: 'center'}}>
            Please fill in your contact details below and someone from our team will be in touch shortly about your enquiry.
            </p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Remove</th>
                </tr>
                {cartItems.map((item) => (
                    <tbody>
                        <tr>
                            {/* <td>
                                    <Image
                                        src={urlFor(item.product.mainImage)
                                            .width(75)
                                            .url()}
                                        alt={item.product.title}
                                        width={75}
                                        height={75}
                                    />
                            </td> */}
<td>
                                    <span>{item.product.title} x {item.quantity}</span>
    
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
        </Container>
    );
};

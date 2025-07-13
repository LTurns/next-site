import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = ({ children }) => {
    const initialState = {
        products: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        dispatch({ type: "SET_LOADING" });
        // Fetch products from API or local file
        const res = await fetch("/api/products"); // or your data source
        const data = await res.json();
        dispatch({ type: "GET_PRODUCTS", payload: data });
    };

    const getProductById = (id) => {
        return state.products.find(product => product.id === id);
    };

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                loading: state.loading,
                getProducts,
                getProductById,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;

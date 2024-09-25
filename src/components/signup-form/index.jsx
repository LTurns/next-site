import PropTypes from "prop-types";
import clsx from "clsx";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CartView } from "@components/cart-view";
import { Button } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";
import axios from "axios";

const SignupForm = ({ className }) => {
    const router = useRouter();
    const { cartItems } = useContext(CartContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(cartItems)

        const item = cartItems.map(i => {
            return `${i.product.title} : ${i.quantity}`
        })

        console.log(item.toString().replace(',', ', '))

        try {
            axios
              .post("https://getform.io/f/cee9fb5b-06de-41ac-a982-5103f16311ce", {
                email: data.email,
                name: data.name,
                number: data.phone ?? '',
                message: data.message ?? '',
                products: item,
              })
              .then(() => router.push({ pathname: "/thankyou" }))
  
          } catch (err) {
            throw new Error(err);
          }

        // router.push({
        //     pathname: "/thankyou",
        // });
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row mb-2">
                <div className="mb-5 col-lg-4">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.name && (
                        <ErrorText>{errors.name?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5 col-lg-4">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorText>
                            {errors.email?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 col-lg-4">
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                    />
                </div>
                </div>
                <div className="mb-5 col-lg-12">
                    <label className="form-label">
                        Message
                    </label>
                    <textarea 
                    id="message"
                    {...register("message")} />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
};
export default SignupForm;

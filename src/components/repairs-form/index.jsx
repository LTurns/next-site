import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const RepairsForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data, e) => {

        try {
            axios
              .post("https://getform.io/f/2d1525ec-9a44-4f8f-ad6e-87a1b9d87db6", {
                email: data.email,
                name: data.name,
                number: data.phone ?? '',
                message: data.message,
                product: data.product ?? '',
              })
              .then(() => router.push({ pathname: "/thankyou" }));
          } catch (err) {
            throw new Error("Error sending email");
          }
    };
    return (
        <div className="form-wrapper-one registration-area">
            <h3 className="mb--30">Contact Us</h3>
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="contact-name" className="form-label">
                        Your Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.contactName && (
                        <ErrorText>{errors.name?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-email" className="form-label">
                        Email
                    </label>
                    <input
                        name="contact-email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.contactEmail && (
                        <ErrorText>{errors.email?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-phone" className="form-label">
                        Phone
                    </label>
                    <input
                        name="contact-phone"
                        type="tel"
                        id="phone"
                        {...register("phone")}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="product" className="form-label">
                        Product
                    </label>
                    <input
                        name="product"
                        type="text"
                        {...register("product", {
                            required: "Product is required",
                        })}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-message" className="form-label">
                        What needs repairing?
                    </label>
                    <textarea
                        id="contact-message"
                        rows="3"
                        {...register("message", {
                            required: "Message is required",
                        })}
                    />
                    {errors.contactMessage && (
                        <ErrorText>{errors.message?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium">
                    Send Message
                </Button>
            </form>
        </div>
    );
};
export default RepairsForm;

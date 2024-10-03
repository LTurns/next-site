import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ContactForm = () => {
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
              .post("https://getform.io/f/7c4ff1e8-d838-46d1-b502-5853f033d47a", {
                email: data.email,
                name: data.name,
                number: data.phone ?? '',
                message: data.message,
                subject: data.subject ?? '',
              })
              .then(() => $router.push({ path: "/thankyou" }));
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
                        {...register("contactName", {
                            required: "Name is required",
                        })}
                    />
                    {errors.contactName && (
                        <ErrorText>{errors.contactName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-email" className="form-label">
                        Email
                    </label>
                    <input
                        name="contact-email"
                        type="email"
                        {...register("contactEmail", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.contactEmail && (
                        <ErrorText>{errors.contactEmail?.message}</ErrorText>
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
                        {...register("contactPhone")}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="subject" className="form-label">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        {...register("subject")}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-message" className="form-label">
                        Write Message
                    </label>
                    <textarea
                        id="contact-message"
                        rows="3"
                        {...register("contactMessage", {
                            required: "Message is required",
                        })}
                    />
                    {errors.contactMessage && (
                        <ErrorText>{errors.contactMessage?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium">
                    Send Message
                </Button>
            </form>
        </div>
    );
};
export default ContactForm;

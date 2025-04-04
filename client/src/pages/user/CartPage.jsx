import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../../config/axiosInstance";

export const CartPage = () => {
    const [cartData, isLoading, error] = useFetch("/cart/get-cart-details");
    const errorMessage = error?.response?.data?.message || "unable to fetch cart";

    //publickey (for frontend)
    //private key (for backend)
    

    const makePayment = async () => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

            const session = await axiosInstance({
                url: "/payment/create-checkout-session",
                method: "POST",
                data: { products: cartData?.courses },
            });

            console.log(session, "=======session");
            const result = stripe.redirectToCheckout({
                sessionId: session.data.sessionId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    if (error) return <p>{errorMessage} </p>;

    return (
        <div>
            <div className="flex gap-20  ">
                <div className="w-8/12">
                    {cartData?.courses?.map((value) => (
                        <div className="flex items-center gap-5 bg-accent-content my-5 " key={value._id}>
                            <img className=" h-20 " src={value?.courseId?.image} alt="course img" />
                            <h3>{value?.courseId?.title}</h3>
                            <h3>{value?.courseId?.price}</h3>
                        </div>
                    ))}
                </div>
                <div className="w-4/12 flex text-center bg-secondary">
                    <h1>Payment Details</h1>
                </div>
            </div>

            <button className="btn btn-success" onClick={makePayment}>
                Check out
            </button>
        </div>
    );
};

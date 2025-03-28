import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const CourseDetails = () => {
    const params = useParams();

    const [courseDetails, isLoading, error] = useFetch(`/course/courseDetails/${params?.id}`);

    const handleAddToCart = async () => {
        try {
            const response = await axiosInstance({ method: "POST", data: { courseId: params?.id }, url: "/cart/add-to-cart" });
            console.log(response, "=====add to cart RES");
            toast.success("course added to cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "unable to add course to cart");
        }
    };

    return (
        <div>
            <h1>Course Details Page</h1>
            <div>
                <div>
                    <h1>{courseDetails?.title}</h1>
                    <p>{courseDetails?.description}</p>
                </div>
                <div>
                    <img src={courseDetails?.image} alt="course-image" />
                </div>
                <button className="btn btn-success" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
    const params = useParams();
    console.log(params, "====params");

    const [courseDetails, isLoading, error] = useFetch(`/course/courseDetails/${params?.id}`);

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
                <button className="btn btn-success">Add to Cart</button>
            </div>
        </div>
    );
};

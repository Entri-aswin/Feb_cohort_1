import React from "react";
import { CourseCards } from "../../components/user/Cards";
import { CourseCardSkeltons } from "../../components/user/Skeltons";
import { useFetch } from "../../hooks/useFetch";

export const Courses = () => {
    
    const [courseList, isLoading, error] = useFetch("/course/courseList");

    if (isLoading) {
        return <CourseCardSkeltons />;
    }

    return (
        <div>
            <h1>Course listing page</h1>
            {courseList?.map((value) => (
                <CourseCards course={value} key={value?._id} />
            ))}
        </div>
    );
};

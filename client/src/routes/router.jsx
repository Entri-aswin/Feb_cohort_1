import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Home } from "../pages/user/Home";
import { RootLayout } from "../layout/RootLayout";
import { Profile } from "../pages/user/Profile";
import { ProtectRoutes } from "./ProtectRoutes";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { Courses } from "../pages/user/Courses";
import { CourseDetails } from "../pages/user/CourseDetails";
import { LoginPage } from "../pages/shared/LoginPage";
import { MentorLayout } from "../layout/mentorLayout";
import { CartPage } from "../pages/user/CartPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <h1>Signup</h1>,
            },
            {
                path: "courses",
                element: <Courses />,
            },
            {
                path: "courseDetails/:id",
                element: <CourseDetails />,
            },
            {
                path: "user",
                element: <ProtectRoutes />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "cart",
                        element: <CartPage />,
                    },
                    {
                        path: "payment",
                        element: <h1>payment</h1>,
                    },
                    {
                        path: "payment/success",
                        element: <h1>Payment success </h1>,
                    },
                    {
                        path: "payment/cancel",
                        element: <h1>Payment Cancelled </h1>,
                    },
                ],
            },
        ],
    },
    {
        path: "admin",
        element: <MentorLayout />,
        // element: <AdminLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="mentor" />,
            },
            {
                path: "signup",
            },
            {
                element: <ProtectedRoutesAdmin />,
                children:[
                    //profile
                    // userlistingpage
                    // product create page
                    // mentorListing page
                    
                ],
            },
        ],
    },
]);

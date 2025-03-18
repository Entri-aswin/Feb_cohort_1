import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Home } from "../pages/user/Home";
import { RootLayout } from "../layout/RootLayout";
import { Profile } from "../pages/user/Profile";
import { ProtectRoutes } from "./ProtectRoutes";
import { ErrorPage } from "../pages/shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
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
                element: <h1>Login</h1>,
            },
            {
                path: "signup",
                element: <h1>Signup</h1>,
            },
            {
                element: <ProtectRoutes />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                    {
                        path: "cart",
                        element: <h1>cart</h1>,
                    },
                    {
                        path: "payment",
                        element: <h1>payment</h1>,
                    },
                ],
            },
        ],
    },
]);

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
}

export default App;

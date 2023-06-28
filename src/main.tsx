import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";
import PostPage from "./pages/post/post.page";

const router = createBrowserRouter([
    { path: "/home", element: <HomePage /> },
    { path: "/post", element: <PostPage /> }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

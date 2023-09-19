import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
<<<<<<< HEAD
=======
import CreateProjectPage from "./pages/CreateProjectPage.jsx";

>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457

import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage />},
      { path: "/signup", element: <SignupPage />},
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/users", element: <SignupPage /> },
      { path: "/createproject", element: <CreateProjectPage /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  );
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CreateProjectPage from "./pages/CreateProjectPage.jsx";
<<<<<<< HEAD
import UserPage from "./pages/UserPage.jsx"
=======
import ProfilePage from "./pages/ProfilePage.jsx";
>>>>>>> test


import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage />},
      { path: "/projects", element: <CreateProjectPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
<<<<<<< HEAD
      { path: "/signup", element: <SignupPage /> },
      { path: "/users/:id", element: <UserPage /> },
      { path: "/createproject", element: <CreateProjectPage /> },

=======
      { path: "/users", element: <SignupPage /> },
      { path: "/users", element: <ProfilePage /> },
>>>>>>> test
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
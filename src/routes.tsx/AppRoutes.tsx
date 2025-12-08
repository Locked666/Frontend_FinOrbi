import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Login } from "@/pages/auth/login"
import Layout from "@/layouts/layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />
        {/* Rota Privada */}
        <Route
          path="/"
          element={
            <PrivateRoute>
                <Layout/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";

import { Login } from "@/pages/auth/login";
import PageExpense from "@/pages/expense/PageExpense";
import MainLayout from "@/layouts/layout";
import HomePage from "@/pages/home/HomePage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rota Privada com Layout */}
        <Route
          path="/"
          element={
            //<PrivateRoute>
            <MainLayout />
            //</PrivateRoute>
          }
        >
          {/* ROTAS FILHAS QUE APARECEM NO OUTLET */}
          <Route index element={<HomePage />} />
          <Route path="expense" element={<PageExpense />} />
          {/* adicione mais rotas do sidebar aqui */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

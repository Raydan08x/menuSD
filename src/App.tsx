import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GastrobarAdminPage from "./pages/GastrobarAdminPage";
import GastrobarMenuPage from "./pages/GastrobarMenuPage";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/gastrobar/menu" element={<GastrobarMenuPage />} />
        <Route path="/admin/gastrobar" element={<GastrobarAdminPage />} />
        <Route path="*" element={<Navigate to="/gastrobar/menu" replace />} />
      </Routes>
    </>
  );
}

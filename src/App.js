import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import ManageCall from "./pages/ManageCall";
import ListCall from "./pages/ListCall";
import NotFound from "./pages/NotFound";
import ListPrisoner from "./pages/ListPrisoner";
import ListPolice from "./pages/ListPolice";
import AddPolice from "./pages/AddPolice";
import AddPrisoner from "./pages/AddPrisoner";
import Login from "./pages/Login";
import HistoryCall from "./pages/HistoryCall";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Dashboard />} />
        {/* dashboard */}
        <Route path="dashboard" element={<NotFound />} />
        <Route path="thong-ke" element={<Dashboard />} />
        <Route path="lich-trinh-goi-video" element={<NotFound />} />
        <Route path="bao-cao-hoat-dong" element={<NotFound />} />
        {/* quan ly can bo */}
        <Route path="them-moi-can-bo" element={<AddPolice />} />
        <Route path="danh-sach-can-bo" element={<ListPolice />} />
        {/* quan ly pham nhan */}
        <Route path="them-moi-pham-nhan" element={<AddPrisoner />} />
        <Route path="danh-sach-pham-nhan" element={<ListPrisoner />} />
        {/* quan ly lich goi */}
        <Route path="danh-sach-goi-video" element={<ListCall />} />
        <Route path="tao-moi-lich-goi" element={<ManageCall />} />
        <Route path="quan-ly-cuoc-goi" element={<ManageCall />} />
        <Route path="thong-tin-cuoc-goi" element={<HistoryCall />} />
        
        {/* setting */}
        <Route path="setting" element={<NotFound />} />
      </Route>
      <Route path="/login"  >
        <Route path="" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;

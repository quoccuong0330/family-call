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
import { createContext, useState } from "react";
import PrisonerScreen from "./pages/PrisonerScreen";

export const AppContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const users = [
    {
      id: 1,
      name: "quan_giao",
      role: "Police",
    },
    {
      id: 2,
      name: "pham_nhan",
      role: "Prisoner",
    },
    {
      id: 3,
      name: "Khang",
      role: "Family",
    },
  ];

  const prisoners = [
    {
      prisoner_id: 2,
      family_id: 3,
    },
  ];

  const timestamp = Date.now();

  return (
    <AppContext.Provider
      value={{ currentUser, setCurrentUser, users, prisoners, timestamp }}
    >
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
        <Route path="prisoner" element={<PrisonerScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

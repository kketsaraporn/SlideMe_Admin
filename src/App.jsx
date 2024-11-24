import { useEffect, useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Header from "./Layout/Header/Header";
import Review from "./components/Review Management/Review";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminManagement from "./components/Admin Management/AdminManagement";
import Permission from "./components/Permission/Permission";
import AccountStatus from "./components/Account Status/AccountStatus";
import AdminAccout from "./components/Admin Account Management/AdminAccout";
import Login from "./components/Login/Login";
import Forgot from "./components/Login/Forgotpassword/Forgot";
import CheckDriver from "./components/Review2/CheckDriver";
import Checkorder from "./components/Checkorder/Checkorder";
import Layout from "./Layout/layout/Layout";

function App() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "";
  });
  const [slide, setSlide] = useState(false);

  function handleSlide() {
    setSlide(!slide);
  }

  // สร้าง Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setToken={setToken} setRole={setRole} token={token} />
            )
          }
        />
        <Route path="/forgot" element={<Forgot />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout
                slide={slide}
                handleSlide={handleSlide}
                setToken={setToken}
                setRole={setRole}
                token={token}
              />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminmanagement" element={<AdminManagement />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review/CheckDriver" element={<CheckDriver />} />
          <Route path="/status" element={<AccountStatus />} />
          <Route path="/adminaccmanagement" element={<AdminAccout />} />
          <Route path="/checkorder" element={<Checkorder />} />
        </Route>

        {/* Catch all route */}
        <Route
          path="*"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

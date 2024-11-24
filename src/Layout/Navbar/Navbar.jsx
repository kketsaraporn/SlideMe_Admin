import React from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.png";

function Sidebar({ slide, setToken, setRole }) {
  const currentTab = useLocation();
  const navigate = useNavigate();

  return (
    <div className={slide ? "sidebar toggle" : "sidebar"}>
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="sidebar-menu">
        <Link to="/dashboard">
          <button
            className={`my-1 menu-item font-semibold ${
              (currentTab.pathname === "/dashboard" && "active") ||
              (currentTab.pathname === "/" && "active")
            }`}
          >
            Dashboard
          </button>
        </Link>
        <Link to="/adminmanagement">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/adminmanagement" && "active"
            }`}
          >
            Admin Management
          </button>
        </Link>
        <Link to="/permission">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/permission" && "active"
            }`}
          >
            Permission
          </button>
        </Link>
        <Link to="/status">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/status" && "active"
            }`}
          >
            สถานะบัญชี
          </button>
        </Link>
        <Link to="/distance">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/distance" && "active"
            }`}
          >
            จัดการระยะทาง
          </button>
        </Link>
        <Link to="/">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            จัดการประเภทสไลด์
          </button>
        </Link>
        <Link to="">
          {" "}
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            จัดการอัตราค่าบริการ
          </button>
        </Link>
        <Link to="/checkorder">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/checkorder" && "active"
            }`}
          >
            ตรวจสอบ Order
          </button>
        </Link>
        <Link to="">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            ตรวจสอบการสมัคร
          </button>
        </Link>
        <Link to="/review">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/review" && "active"
            }`}
          >
            จัดการช้อมูลรีวิว
          </button>
        </Link>
        <Link to="">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            User Management
          </button>
        </Link>
        <Link to="/provider">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "/provider" && "active"
            }`}
          >
            Provider Management
          </button>
        </Link>
        <Link to="">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            Banner Management
          </button>
        </Link>
        <Link to="">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            การใช้งานเว็บไซต์
          </button>
        </Link>
        <Link to="">
          <button
            className={`my-1 menu-item font-semibold ${
              currentTab.pathname === "" && "active"
            }`}
          >
            เกี่ยวกับเรา
          </button>
        </Link>
      </ul>
      <div
        onClick={() => {
          Swal.fire({
            title: "ยืนยันออกจากระบบ",
            text: "กดยืนยันเพื่อออกจากระบบ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              setToken("");
              setRole("")
              Swal.fire({
                title: "ออกจากระบบสำเร็จ!",
                icon: "success",
                confirmButtonText: "เสร็จสิ้น",
              }).then(() => {
                navigate("/login", { replace: true });
              });
            }
          });
        }}
        className="sidebar-logout mb-auto mt-20"
      >
        <button><span className="fs-6 font-semibold">Logout</span><span className="ml-3 mt-2 text-red-300"><i className="bi bi-box-arrow-left"></i></span></button>
      </div>
    </div>
  );
}

export default Sidebar;

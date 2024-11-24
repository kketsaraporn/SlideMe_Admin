import React, { useState } from "react";
import "./Login.css";
import logo from "../../imgs/logo1.png";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../../app-data/Authen";

function Login({ setToken, setRole, token }) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = account;
    const pass = password;
    const userInfo = verifyUser(user, pass);

    if (userInfo !== null) {
      Swal.fire({
        title: "เข้าสู่ระบบสำเร็จ!",
        text: "ยินดีต้อนเข้ารับสู่ Slide me Admin",
        icon: "success",
        confirmButtonText: "เข้าสู่ระบบ",
      }).then(() => {
        localStorage.setItem("token", userInfo.token);
        localStorage.setItem("role", userInfo.role);
        setToken(userInfo.token);
        setRole(userInfo.role);
        // navigate("/dashboard");
      });
    } else {
      Swal.fire({
        title: "ข้อมูลไม่ถูกต้อง",
        text: "กรุณาตรวจสอบอีเมลและรหัสผ่านของคุณ",
        icon: "error",
      });
    }
  };

  // ถ้ามี token อยู่แล้ว redirect ไป dashboard
  React.useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header text-center">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="mt-3">SLIDE ME</h3>
          <p>กรุณากรอกอีเมลและรหัสผ่านของคุณเพื่อดำเนินการต่อ</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="account" className="form-label">
              Account Name
            </label>
            <input
              type="text"
              id="account"
              className="form-control"
              placeholder="ชื่อบัญชี"
              value={account}
              onChange={(e) => setAccount(e.target.value.trim())}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <div onClick={() => navigate("/forgot")} className="text-end mt-1">
              <a className="forgot-password-link cursor-pointer">
                ลืมรหัสผ่าน?
              </a>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

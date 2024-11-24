import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userDummyData from "../../../data/usersDummyData";
import "./UserDetail.css";

function UserDetail() {
  const navigate = useNavigate();
  const { userId } = useParams(); // รับ userId จาก URL
  const user = userDummyData.find((u) => u.id === parseInt(userId)); // หา user ตาม ID

  return (
    <div className="user-detail-container">
      <div className="user-detail-content">
        <div className="user-detail-profile">
          <img src="../../../../public/img/man.jpg" alt="Profile" />
          <h2>
            {user?.name} {user?.surname}
          </h2>
        </div>
        <div className="user-detail-info">
          <h3>ข้อมูลบัญชีผู้ใช้</h3>
          <div className="user-detail-info-content">
            <p>
              ชื่อ: <input type="text" disabled value={user?.name} />
            </p>
            <p>
              นามสกุล: <input type="text" disabled value={user?.surname} />
            </p>
            <p>
              อีเมล: <input type="text" disabled value={user?.email} />
            </p>
            <p>
              เบอร์โทรศัพท์:
              <input type="text" disabled value={user?.phoneNumber} />
            </p>
            <button onClick={() => navigate(-1)}>กลับ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;

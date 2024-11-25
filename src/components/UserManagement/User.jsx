import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import userDummyData from "../../data/usersDummyData"; // นำเข้าข้อมูล dummy
import "./User.css";

function User() {
  // const [users, setUsers] = useState(userDummyData); // จัดการสถานะของข้อมูลผู้ใช้
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState(location.state?.users || userDummyData);

  // ฟังก์ชันลบผู้ใช้
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers); // อัพเดทสถานะข้อมูลผู้ใช้
  };

  return (
    <div className="user-container">
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ-สกุล</th>
              <th>อีเมล</th>
              <th>เบอร์โทรศัพท์</th>
              <th>รายละเอียด</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{`${user.name} ${user.surname}`}</td>
                <td>{user.email || "example@example.com"}</td>
                {/* ตัวอย่างอีเมล */}
                <td>{user.phoneNumber}</td>
                <td>
                  <button
                    className="details-button"
                    onClick={() => navigate(`/userdetail/${user.id}`)}
                  >
                    รายละเอียด
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/edituser/${user.id}`)}
                    className="edit-button"
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminManagement.css";

const AdminManagement = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [adminList, setAdminList] = useState([
    { id: 1, name: "roren" },
    { id: 2, name: "roren" },
  ]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ!",
      text: "ข้อมูลถูกบันทึก",
      icon: "success",
    });
    console.log("Form submitted:", formData);
  };

  // Function to handle edit button click
  const handleEdit = (id) => {
    // นำทางไปยังหน้า EditAdminAccount พร้อม ID
    navigate(`/edit-admin/${id}`);
  };

  const handleDelete = (id) => {
    console.log("Delete admin with ID:", id);
  };

  return (
    <div className="admin-management-container">
      <h2>Admin Management</h2>

      <div className="form-container">
        <h3>เพิ่มบัญชี Admin</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="ชื่อ"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="นามสกุล"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="เบอร์โทร"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="ยืนยันรหัสผ่าน"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-row">
            <button type="submit" className="save-button">
              บันทึก
            </button>
            <button type="button" className="cancel-button">
              ยกเลิก
            </button>
          </div>
        </form>
      </div>

      <div className="admin-list-container">
        <h3>ข้อมูลบัญชี Admin</h3>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((admin, index) => (
              <tr key={admin.id}>
                <td>{index + 1}</td>
                <td>{admin.name}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(admin.id)}
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(admin.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="admin-list-pagination">
          <p>Showing 1 - 2 of 4</p>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;

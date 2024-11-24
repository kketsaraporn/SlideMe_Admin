import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import providerDummyData from "../../app-data/providersDummyData"; // นำเข้าข้อมูล dummy
import "./Provider.css";

function Provider() {
  // const [providers, setProviders] = useState(providerDummyData); // จัดการสถานะของข้อมูลผู้ให้บริการ
  const navigate = useNavigate();
  const location = useLocation();
  const [providers, setProviders] = useState(location.state?.providers || providerDummyData);

  // ฟังก์ชันลบผู้ให้บริการ
  const handleDelete = (id) => {
    const updatedProviders = providers.filter((provider) => provider.id !== id);
    setProviders(updatedProviders); // อัพเดทสถานะข้อมูลผู้ให้บริการ
  };

  return (
    <div className="provider-container">
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
            {providers.map((provider, index) => (
              <tr key={provider.id}>
                <td>{index + 1}</td>
                <td>{`${provider.name} ${provider.surname}`}</td>
                <td>{provider.email || "example@example.com"}</td>
                <td>{provider.phoneNumber}</td>
                <td>
                  <button
                    className="details-button"
                    onClick={() => navigate(`/providerdetail/${provider.id}`)}
                  >
                    รายละเอียด
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/editprovider/${provider.id}`)}
                    className="edit-button"
                  >
                    แก้ไข
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(provider.id)}
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

export default Provider;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceData from "../../app-data/Pricedata";
import "./PriceManagement.css";

function PriceManagement() {
  const navigate = useNavigate();
  const itemsPerPage = 20; // จำนวนรายการที่แสดงในแต่ละหน้า
  const [currentPage, setCurrentPage] = useState(1); // หน้าปัจจุบัน
  const [data, setData] = useState(PriceData); // ข้อมูลทั้งหมด

  // คำนวณจำนวนรายการที่จะแสดงในหน้าปัจจุบัน
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // ฟังก์ชันจัดการเมื่อผู้ใช้เปลี่ยนแปลงราคาของรายการ
  const handlePriceChange = (id, newPrice) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.order_number === id && item.price !== undefined // ตรวจสอบว่ามีราคา
          ? { ...item, price: newPrice }
          : item
      )
    );
  };

  // ฟังก์ชันจัดการเมื่อคลิกปุ่มแก้ไข
  const handleEditClick = (id) => {
    navigate(`/edit-price/${id}`);
  };

  // ฟังก์ชันสำหรับไปยังหน้าถัดไป
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // ฟังก์ชันสำหรับไปยังหน้าก่อนหน้า
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // ฟังก์ชันสำหรับไปยังหน้าแรก
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  // ฟังก์ชันสำหรับไปยังหน้าสุดท้าย
  const goToLastPage = () => {
    setCurrentPage(Math.ceil(data.length / itemsPerPage));
  };

  return (
    <div className="price-management">
      <h1>Price Management</h1>
      <div className="price-table">
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อผู้ใช้</th>
              <th>ผู้ให้บริการ</th>
              <th>ราคา</th>
              <th>สถานะ</th>
              <th>แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.order_number}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{item.username}</td>
                <td>{item.provider}</td>
                <td>
                  {item.price !== undefined ? (
                    <input
                      type="number"
                      value={item.price || ""}
                      placeholder="กรอกราคา"
                      onChange={(e) =>
                        handlePriceChange(item.order_number, e.target.value)
                      }
                    />
                  ) : (
                    <span>ไม่มีรายการแก้ไข</span>
                  )}
                </td>
                <td>{item.status}</td>
                <td>
                  {item.price !== undefined && (
                    <button onClick={() => handleEditClick(item.order_number)}>
                      แก้ไข
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ปุ่มสำหรับการเปลี่ยนหน้า */}
<div className="pagination d-flex justify-content-center mt-4">
  {/* ปุ่มหน้าแรก */}
  <button
    onClick={goToFirstPage}
    disabled={currentPage === 1}
    className="btn btn-primary mx-2"
  >
    หน้าแรก
  </button>

  {/* ปุ่มก่อนหน้า */}
  <button
    onClick={prevPage}
    disabled={currentPage === 1}
    className="btn btn-secondary mx-2"
  >
    ก่อนหน้า
  </button>

  {/* แสดงหน้า */}
  <span className="page-info mx-3">
    หน้า {currentPage} จาก {Math.ceil(data.length / itemsPerPage)}
  </span>

  {/* ปุ่มถัดไป */}
  <button
    onClick={nextPage}
    disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
    className="btn btn-secondary mx-2"
  >
    ถัดไป
  </button>

  {/* ปุ่มหน้าสุดท้าย */}
  <button
    onClick={goToLastPage}
    disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
    className="btn btn-primary mx-2"
  >
    หน้าสุดท้าย
  </button>
</div>

    </div>
  );
}

export default PriceManagement;

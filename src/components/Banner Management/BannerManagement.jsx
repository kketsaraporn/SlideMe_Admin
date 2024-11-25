import React, { useState } from 'react';
import './BannerManagement.css'

function BannerManagement() {
    const [showPopup, setShowPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(""); // สร้าง state สำหรับวันที่


    

    const handleUploadPhoto = async () => {
        if (!selectedFile) {
            alert("กรุณาเลือกไฟล์รูปภาพ!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // เพิ่มไฟล์ใน FormData

        try {
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                alert("เกิดข้อผิดพลาดในการอัปโหลด");
                return; // **เพิ่มการตรวจสอบสถานะของ response ก่อนที่จะทำการ parse ข้อมูล**
            }

            const data = await response.json();
            alert("อัปโหลดรูปภาพสำเร็จ!");
            console.log("Uploaded file URL:", data.filePath); // URL ของรูปภาพที่อัปโหลด
        } catch (error) {
            console.error("Error:", error);
            alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์");
        }
    };

    // ฟังก์ชันจัดการไฟล์ที่เลือกและตรวจสอบไฟล์
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // ตรวจสอบว่าไฟล์ที่เลือกเป็นรูปภาพหรือไม่
            if (!file.type.startsWith("image/")) {
                alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น!");
                return;
            }

            // ตรวจสอบขนาดไฟล์ไม่เกิน 10MB
            if (file.size > 10 * 1024 * 1024) {
                alert("ขนาดไฟล์ต้องไม่เกิน 10MB!");
                return;
            }

            setSelectedFile(file); // เก็บไฟล์ลงใน state
            setPreview(URL.createObjectURL(file)); // แสดงภาพตัวอย่าง
        }
    };

    const handleSaveClick = () => {
        Swal.fire({
            title: "ยืนยันที่จะบันทึกข้อมูล?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "บันทึก",
            cancelButtonText: "ยกเลิก"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "เสร็จสิ้น!",
                text: "",
                icon: "success"
              });
            }
          });
    };

    const handleConfirmSave = () => {
        setShowPopup(false);
        alert('บันทึกข้อมูลสำเร็จ!');
    };

    const handleCancelSave = () => {
        setShowPopup(false);
    };

    const toggleStatus = () => {
        setIsActive(!isActive); // เปลี่ยนสถานะจากเปิด/ปิด
    };

    return (
        <div className="banner-container">
            <h2>Banner Management</h2>
            <div className="banner-card"  
            style={{
                backgroundImage: preview ? `url(${preview})` : "none", 
                backgroundColor: !preview ? "green" : "transparent", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
            }}>
                <div className="banner-content">
                    <h3>September 12-22</h3>
                    <h1>Enjoy free Banner delivery in this summer</h1>
                    <p>Designer Dresses - Pick from trendy Designer Dress.</p>
                    <button className="btn-get-started">Get Started</button>
                </div>

                <div className="banner-arrows">
                    <button className="btn rounded-pill bg-secondary">{'<'}</button>
                    <button className="btn rounded-pill bg-secondary">{'>'}</button>
                </div>

                <div className="upload-photo">
                    <label className="btn bg-light">
                        เลือกรูปภาพ
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }} 
                        />
                    </label>

                    {preview && (
                        <div className="preview-container">
                            <img src={preview} alt="Preview" className="preview-image" />
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    setSelectedFile(null);
                                    setPreview("");
                                }}
                            >
                                ลบรูปภาพ
                            </button>
                        </div>
                    )}

                    <button
                        className="btn btn-primary"
                        onClick={handleUploadPhoto}
                        disabled={!selectedFile || isUploading}
                    >
                        {isUploading ? "กำลังอัปโหลด..." : "อัปโหลด"}
                    </button>
                </div>
            </div>

            <div className="form-section">
                <div className="form-group">
                    <label>หัวข้อ</label>
                    <input type="text" placeholder="Enter" />
                </div>
                <div className="form-group">
                    <label>หัวข้อย่อย</label>
                    <input type="text" placeholder="Enter" />
                </div>
                
                <div className="form-group">
                    <label>รายละเอียด</label>
                    <textarea placeholder="Enter"></textarea>
                </div>

                <div className="form-group">
    <label>วันที่</label>
    <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)} // ใช้ state เพื่อเก็บวันที่ที่เลือก
    />
</div>

<div className="form-check form-switch">
    <label htmlFor="flexSwitchCheckDefault">สถานะ</label>
    <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        style={{ margin: 0, justifyContent: 'flex-start' }} // สไตล์แบบ inline เพื่อให้ชิดซ้าย
        /* checked={isActive} // ใช้ state ควบคุมสถานะ
        onChange={toggleStatus} // ฟังก์ชันเปลี่ยนสถานะ */
    />
</div>


                <div className="form-actions">
                    <button className="btn-save" onClick={handleSaveClick}>
                        บันทึก
                    </button>
                    <button className="btn-cancel">ยกเลิก</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h3>ยืนยันการบันทึก</h3>
                        <p>คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?</p>
                        <div className="popup-actions">
                            <button className="btn-confirm" onClick={handleConfirmSave}>
                                ยืนยัน
                            </button>
                            <button className="btn-cancel" onClick={handleCancelSave}>
                                ยกเลิก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BannerManagement;

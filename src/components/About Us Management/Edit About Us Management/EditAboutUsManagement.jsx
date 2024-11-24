import React, { useState } from 'react';
import './EditAboutUsManagement.css';

const EditAboutUsManagement = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
    // ฟังก์ชันบันทึกข้อมูล
    console.log({
      title,
      subtitle,
      description,
      image,
      status,
    });
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setSubtitle('');
    setDescription('');
    setImage(null);
    setStatus(false);
  };

  return (
    <div className="edit-about-us-management">
      <h2>Edit About Us Management</h2>

      <div className="form-section">
        <h3>แก้ไข เกี่ยวกับเรา</h3>
        <form>
          <div className="form-group">
            <label>หัวข้อ</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="หัวข้อ" 
            />
          </div>
          <div className="form-group">
            <label>หัวข้อย่อย</label>
            <input 
              type="text" 
              value={subtitle} 
              onChange={(e) => setSubtitle(e.target.value)} 
              placeholder="หัวข้อย่อย" 
            />
          </div>
          <div className="form-group">
            <label>รายละเอียด</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="รายละเอียด" 
            />
          </div>
          <div className="form-group">
            <label>รูปภาพ</label>
            <input 
              type="file" 
              onChange={handleImageUpload} 
            />
            {image && <img src={image} alt="Preview" className="image-preview" />}
          </div>
          <div className="form-group">
            <label>สถานะ</label>
            <input 
              className="status-checkbox"
              type="checkbox" 
              checked={status} 
              onChange={() => setStatus(!status)} 
            />
          </div>

          <button type="button" onClick={handleSave} className="save-button">บันทึก</button>
          <button type="button" onClick={clearForm} className="cancel-button">ยกเลิก</button>
        </form>
      </div>
    </div>
  );
};

export default EditAboutUsManagement;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PriceManagement.css'

function PriceManagement() {
    const navigate = useNavigate();

    // Function to handle edit button click
    const handleEditClick = (id) => {
      navigate(`/edit-price/${id}`);
    };
  
    return (
      <div className="price-management">
        <h1>Price Management</h1>
        <div className="price-table">
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ</th>
                <th>ราคา</th>
                <th>แก้ไข</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>rorem</td>
                <td><input type="text" placeholder="1500" /></td>
                <td>
                  <button onClick={() => handleEditClick(1)}>แก้ไข</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>rorem</td>
                <td><input type="text" placeholder="2500" /></td>
                <td>
                  <button onClick={() => handleEditClick(2)}>แก้ไข</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default PriceManagement
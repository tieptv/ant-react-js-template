// src/pages/XacThucEKYC.jsx
export default function XacThucEKYC() {
  return (
    <div className="form-container">
      <h2>Thông tin khách hàng (Xác thực eKYC)</h2>
      {/* Add your two‐column eKYC photo upload UI here */}
      <div className="ekyc‐section">
        <div className="photo‐box">
          <label>Ảnh mặt trước CMND/CCCD:</label>
          <button>Chụp ảnh</button>
          <button>Tải ảnh lên</button>
        </div>
        <div className="photo‐box">
          <label>Ảnh mặt sau CMND/CCCD:</label>
          <button>Chụp ảnh</button>
          <button>Tải ảnh lên</button>
        </div>
      </div>
      <div className="capture-face">
        <label>Chụp chính diện khuôn mặt bạn:</label>
        <button>Chụp ảnh</button>
      </div>
      <div className="button-row">
        <button className="btn-cancel">Quay lại</button>
        <button className="btn-next">Tiếp tục &gt;</button>
      </div>
    </div>
  );
}

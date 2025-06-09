const GeneralInfo = () => {
  return (
    <>
      <div className="text-[14px] font-semibold mb-[20px]">Nhập thông tin</div>
      <div className="grid grid-cols-4 mb-[20px]">
        <div className="col-span-1">Loại giấy tờ tùy thân: </div>
        <div className="col-span-3 font-bold">CMND </div>
      </div>
      <div className="grid grid-cols-4 mb-[20px]">
        <div className="col-span-1">Số CMND/CCCD: </div>
        <div className="col-span-3 font-bold">3435676677 </div>
      </div>
      <div className="grid grid-cols-4 mb-[20px]">
        <div className="col-span-1">Số điện thoại: </div>
        <div className="col-span-3 font-bold">03444562215 </div>
      </div>
    </>
  );
};

export default GeneralInfo;

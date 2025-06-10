export default function IdentityInfo() {

  const data = [
    { label: "Họ và tên:", value: "Yuna Nguyễn" },
    { label: "Số CMND/CCCD:", value: "354656574" },
    { label: "Ngày sinh:", value: "23/12/2012" },
    { label: "Giới tính:", value: "Nam" },
    { label: "Quốc tịch:", value: "Việt Nam" },
    { label: "Nguyên quán:", value: "Thành phố Hà Nội" },
    {
      label: "Địa chỉ thường trú:",
      value: "23 Liễu Giai, Quận Ba Đình, Hà Nội",
    },
    { label: "Thời gian hiệu lực:", value: "23/24/2034" },
    { label: "Nơi cấp:", value: "Thành phố Hà Nội" },
    { label: "Ngày cấp:", value: "6/2015" },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-[#EC5176] font-semibold mb-4">
        Quý khách vui lòng kiểm tra chính xác thông tin dưới đây
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-6">
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-[160px_1fr] gap-x-2">
            <div className="text-[#3A2D4C]">{item.label}</div>
            <div className="font-bold text-[#3A2D4C] leading-snug">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

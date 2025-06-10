import RepeatPasswordInput from "./general/RepeatPasswordInput";

export default function CreatePassword() {
  return (
    <>
      <div className="text-[#EC5176] font-bold mb-[20px]">
        Vui lòng tạo mật khẩu để đăng nhập dịch vụ LOTTE Finance Pay Later
      </div>
      <RepeatPasswordInput/>
    </>
  );
}

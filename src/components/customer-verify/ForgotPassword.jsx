import RepeatPasswordInput from "./general/RepeatPasswordInput";

export default function ForgotPassword () {
    return (
        <>
          <div className="text-[#EC5176] font-bold mb-[20px]">
            Đặt lại mật khẩu
          </div>
          <RepeatPasswordInput/>
          <div className="italic text-[#424242] font-normal">
          * Đây la quy định đặt mật khẩu số thông tin tài khoản của tôi tại trang TMĐT này (nếu có) cho LOTTE Finance để xác nhận thông tin, đánh giá tín nhiệm
          </div>
        </>
      );
}
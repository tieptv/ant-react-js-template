import personImage from "@/assets/images/person_image.svg";
import scanImage from "@/assets/images/scan.svg";
import cmnd from "@/assets/images/cccd.png";
import { ReloadOutlined } from "@ant-design/icons";
import qr_sample from "@/assets/images/qr_sample.png";
import Rectangle from "@/assets/images/Rectangle.png";
import { Button } from "antd";

export default function IdentityComponent() {
  const renderIdentityUpload = (title) => {
    return (
      <div className="flex flex-col justify-between bg-[#FBF2F8] border-dashed rounded-[5px] border-[1px] border-[#D9D9D9] py-[20px] h-[267px]">
        <div className="text-[14px] text-center">{title}</div>
        <div className="flex justify-center">
          <img height={37} width={59} src={personImage} />
        </div>
        <div className="justify-center flex gap-2">
          <button className="rounded-[40px] px-5 py-2 text-[#3A2D4C] font-bold bg-[#EEDAE6]">
            Chụp ảnh
          </button>
          <button className="rounded-[40px] px-5 py-2 text-[#3A2D4C] font-bold bg-[#EEDAE6]">
            Tải ảnh lên
          </button>
        </div>
      </div>
    );
  };

  const renderIdentityImage = (title, image) => {
    return (
      <div className="flex flex-col justify-between bg-[#FBF2F8] border-dashed rounded-[5px] border-[1px] border-[#D9D9D9] py-[20px] h-[267px]">
        <div className="text-[14px] text-center">{title}</div>
        <div className="flex justify-center">
          <img className="h-full" src={image} />
        </div>
        <div className="justify-center flex gap-2 text-[#B91B52 text-[14px]">
          <ReloadOutlined className="cursor-pointer" />
          <span className="cursor-pointer">Tải lại</span>
        </div>
      </div>
    );
  };

  const renderCaptureImage = (isUnsupportCamera = false) => {
    return isUnsupportCamera ? (
      <div className="col-span-2 bg-[#FBF2F8] border-dashed rounded-[5px] border-[1px] border-[#D9D9D9] h-[239px] justify-center flex flex-col">
        <div className="flex justify-center relative">
            <img className="h-4/5 w-auto" src={Rectangle} />
          <img className="h-4/5 w-auto absolute" src={qr_sample} />
        </div>
        <div className="flex justify-center">
          <div className="w-[286px] font-bold text-[#EC5176] text-center">
            Mời bạn quét QR Code bằng điện thoại có camera để chụp ảnh chân dung
          </div>
        </div>
      </div>
    ) : (
      <div className="col-span-2 bg-[#FBF2F8] border-dashed rounded-[5px] border-[1px] border-[#D9D9D9] h-[239px] justify-center flex relative">
        <img height={37} width={59} src={scanImage} />
        <button className="rounded-[40px] px-5 py-2 text-[#3A2D4C] font-bold bg-[#EEDAE6] absolute bottom-1/8">
          Chụp ảnh
        </button>
      </div>
    );
  };
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid-cols-1">
          {renderIdentityUpload("Ảnh mặt trước CMND/CCCD")}
        </div>
        <div className="grid-cols-1">
          {renderIdentityImage("Ảnh mặt sau CMND/CCCD", cmnd)}
        </div>
        <div className="col-span-2 text-[14px]">
          Chụp chính diện khuôn mặt bạn
        </div>
        {renderCaptureImage(true)}
      </div>
    </div>
  );
}

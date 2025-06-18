import PageHeader from "@/components/onboarding/PageHeader";
import backgroundImage from "@/assets/images/background.png";
import LoadingSpinner from "@/components/base/LoadingSpinner";
import LfvnIcon from "@/assets/icons/lfvn-icon-white.svg?react";
import CustomButton from "@/components/base/CustomButton";

export default function Approval() {
  return (
    <div className="bg-white flex-1 flex-col rounded-xl p-8 shadow-md">
      <PageHeader label="Phê duyệt" />
      <div className="flex items-center justify-center py-8 flex-col flex-1">
        <LfvnCard logo loading />
      </div>
      <div className="flex justify-center items-center border-t border-gray-300 pt-4">
        <CustomButton
          title="Quay lại trang mua sắm"
          type={"back"}
          className="!mr-4"
        />
      </div>
    </div>
  );
}

export const LfvnCard = ({ logo, loading }) => {
  return (
    <div className="w-2/3 min-h-[214px] rounded-[20px] bg-gradient-to-tr bg-[linear-gradient(to_top_right,_#A32385,_#E5194C)]">
      {logo && (
        <div className="m-[20px]">
          <LfvnIcon width={60} height={24} fill={"white"} />
        </div>
      )}
      <div
        className="bg-cover bg-center rounded-[20px] bg-no-repeat min-h-[214px] w-full p-4 justify-center items-center flex flex-col z-10 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <span className="text-white font-bold text-sm">
          Hồ sơ của bạn đang được xử lý ...
        </span>
        <div className="h-4" />
        {loading && <LoadingSpinner size={70} />}
      </div>
    </div>
  );
};

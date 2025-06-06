export default function PageHeader({ label = "" }) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span className="self-center font-bold text-lg">{label}</span>
        <span
          level={4}
          className="text-secondary-400 mt-[0px] self-center font-bold text-sm"
        >
          LOTTE Finance Pay Later
        </span>
      </div>
      <div className="w-full h-[2px] mt-4 bg-[#E4D5D5]" />
    </div>
  );
}

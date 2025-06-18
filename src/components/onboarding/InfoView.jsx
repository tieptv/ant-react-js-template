import React from "react";

const InfoView = ({
  title = "",
  data,
  rowNumber = 1,
  nonBorder = false,
  isFullWidth = true,
}) => {
  // const gridCols = `grid-cols-${rowNumber}`;
  const gridCols = rowNumber === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
  const borderContainer = !nonBorder && "border-b border-[#E4D5D5]";
  return (
    <div className={`mb-6 pb-9 ${borderContainer}`}>
      <div className="text-sm font-bold mb-4">{title}</div>
      <div
        className={`grid grid-cols-1 ${gridCols} gap-2 ${
          isFullWidth ? "" : "md:w-1/2"
        }`}
      >
        {data.map((item, index) => (
          <div key={index} className="flex">
            <div className="font-normal text-xs w-40 flex-[1] md:flex-[0.5]">
              {item.label}
            </div>
            <div className="font-bold text-xs flex-[1] md:flex-[0.5]">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoView;

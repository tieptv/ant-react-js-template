import React, { useState } from "react";
const data = [
  { id: 1, dueDate: "11/04/2021", amount: "1.580.000" },
  { id: 2, dueDate: "11/05/2021", amount: "2.000.000" },
  { id: 3, dueDate: "11/06/2021", amount: "1.700.000" },
  { id: 4, dueDate: "11/07/2021", amount: "1.900.000" },
  { id: 5, dueDate: "11/08/2021", amount: "2.100.000" },
  { id: 6, dueDate: "11/09/2021", amount: "2.300.000" },
  { id: 7, dueDate: "11/10/2021", amount: "2.500.000" },
  { id: 8, dueDate: "11/11/2021", amount: "2.800.000" },
];
const TableTransaction = ({ itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-4 max-w-3xl mx-auto ">
      <h2 className="font-semibold text-lg mb-4">Lịch trả nợ dự kiến:</h2>

      {/* Desktop Table */}
      <div className="hidden sm:block">
        <div
          className="w-full"
          style={{ minHeight: `${itemsPerPage * 40}px` }} // mỗi dòng 48px
        >
          <table className="w-full table-auto border-t border-b border-gray-300">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-2">#</th>
                <th className="py-2">Ngày đến hạn</th>
                <th className="py-2">Số tiền (VND)</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">{item.dueDate}</td>
                  <td className="py-2">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden space-y-4">
        {paginatedData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md p-3 shadow-sm"
          >
            <p className="text-sm">
              <span className="font-semibold">#:</span> {item.id}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Ngày đến hạn:</span>{" "}
              {item.dueDate}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Số tiền:</span> {item.amount} VND
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          className="px-3 py-1 "
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="text-sm">
          Trang {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1 "
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>

      {/* Footer */}
      <div className="flex flew-row justify-between">
        <div className="flex-1 mt-4 text-sm text-text-200">
          Hướng dẫn thanh toán, chi tiết tại
          <br />
          <a
            href="https://www.lottefinance.vn/web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B22264] underline"
          >
            https://www.lottefinance.vn/web
          </a>
        </div>

        <div className="flex-1 mt-2 text-right text-sm text-text-default">
          Tổng số tiền trả:{" "}
          <span className="text-text-default font-bold">
            {paginatedData
              .reduce((acc, cur) => {
                const cleaned = cur.amount.replace(/\./g, "");
                return acc + parseInt(cleaned, 10);
              }, 0)
              .toLocaleString("vi-VN")}{" "}
            VND
          </span>{" "}
          <br />
          (bao gồm lãi)
        </div>
      </div>
    </div>
  );
};

export default TableTransaction;

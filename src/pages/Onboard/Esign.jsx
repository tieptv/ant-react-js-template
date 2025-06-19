import PageHeader from "@/components/onboarding/PageHeader";
import CustomButton from "@/components/base/CustomButton";
import { pdfjs, Document, Page } from "react-pdf";
import React, { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Checkbox, Form } from "antd";
import OTPInput from "@/components/customer-verify/OTPInput";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};
export default function Esign() {
  return (
    <div className="bg-white flex-1 flex-col rounded-xl p-8 shadow-md">
      <PageHeader label="Ký hợp đồng" />
      <div className="flex py-8 flex-col flex-1">
        <span className="text-text-default font-bold text-sm">
          Thông tin hợp đồng
        </span>

        <div className="mt-4">
          <PDFViewer />
        </div>
        <Form layout="vertical">
          <div className="mt-4 ml-10 flex flex-col">
            <span className="text-text-default font-bold text-sm ">
              Đảm bảo bạn đã đọc kỹ các điều khoản hợp đồng *
            </span>
            <Checkbox
              className="text-text-default"
              style={{ fontSize: 14, marginTop: 10, marginBottom: 10 }}
            >
              Tôi đồng ý
            </Checkbox>
            <OTPInput />
          </div>
        </Form>
      </div>
      <div className="flex justify-end items-center border-t border-gray-300 pt-4">
        <CustomButton title="Ký hợp đồng" type={"primary"} className="!mr-4" />
      </div>
    </div>
  );
}

export function PDFViewer() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full h-[600px] overflow-y-scroll bg-gray-100 p-4 rounded shadow">
      <Document
        // file="/sample.pdf"
        file="https://pdfobject.com/pdf/sample.pdf"
        options={options}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={600} // or use container width dynamically
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="mb-4"
          />
        ))}
      </Document>
    </div>
  );
}

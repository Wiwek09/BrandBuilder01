import React from "react";
import jsonData from "@/lib/dummy.json";
import PdfBox from "../components/pdfBox";

const pdfContainer = () => {
  return (
    <div>
      <div className="text-center mt-6 ">
        <div className="flex flex-wrap justify-center ">
          {jsonData.pdf.map((item, index) => (
            <PdfBox key={index} pdfData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default pdfContainer;

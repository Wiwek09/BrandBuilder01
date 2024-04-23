"use client";
import { useState } from "react";
import PdfContainer from "../components/pdfContainer";
import ImageContainer from "../components/imageContainer";

export default function Home() {
  const [click, setClick] = useState("image");

  return (
    <div className="flex flex-col justify-center mt-3 ">
      <h1 className="text-center">Gallery</h1>
      <div className="flex justify-around">
        <div onClick={() => setClick("image")} className=" cursor-pointer">
          <div className="flex flex-col justify-between text-center ">
            <span>Images</span>
            {click === "image" ? (
              <span className="w-40 h-2 rounded-3xl bg-blue-700"></span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div onClick={() => setClick("pdf")} className=" cursor-pointer">
          <div className="flex flex-col justify-between text-center ">
            <span>PDF</span>
            {click === "pdf" ? (
              <span className="w-40 h-2 rounded-3xl bg-blue-700"></span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {click === "pdf" ? <PdfContainer /> : <ImageContainer />}
      {/* <PdfView/> */}
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const pdfBox = ({ pdfData }: { pdfData: any }) => {
  useEffect(() => {
    console.log("check", pdfData);
  });

  return (
    <div className="md:px-3 px-1 mt-3 overflow-hidden">
      <Link href={pdfData.link} target="_blank">
        <div className=" md:w-[300px] md:h-[300px] w-[250px] h-[250px] p-3 border-2">
          <div className="w-full h-full relative ">
            <Image
              className="w-full h-full object-cover"
              src={pdfData.thumbnail}
              height={1440}
              width={900}
              alt="image"
            />

            <div className="absolute flex right-2 bottom-0 justify-end">
              <Image className="h-full w-full" src={pdfData.icon} alt="pdfimg" height={30} width={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-center mt-2">
          <span>{pdfData.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default pdfBox;

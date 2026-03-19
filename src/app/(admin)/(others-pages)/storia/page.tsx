
import { Metadata } from "next";
import React from "react";
import { BoxStoria } from "@/components/storia/BoxStoria";

export const metadata: Metadata = {
  title: "Fly Club Saronno | Storia del club",
  description: "Storia del club",
};

export default function Storia() {
  return (
    <>
        <div>
          <div className="rounded-2xl p-5 lg:p-6 sm-p-0 principal-box">
            <div className="">
              <h1 className="mb-5 text-title-sm font-bold lg:mb-7 text-white ">
               Storia
              </h1>
            
                <div className="space-y-6 mb-5 box-storia">
                    <BoxStoria />
                </div>
            </div>
                </div>  
          </div>
          </>
  );
}

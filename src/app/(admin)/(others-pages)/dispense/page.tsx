
import SocioInfo from "@/components/user-profile/SocioInfo";
import { Metadata } from "next";
import React from "react";
import { MenuMobile } from "@/components/common/MenuMobile";
import BoxDispensa from "@/components/dispense/BoxDispensa";


export const metadata: Metadata = {
  title: "Fly Angling Club Saronno | Consiglio Direttivo",
  description:
    "",
};

export default function Dispensa() {
  return (
    <>
    <div>
      <div className="rounded-2xl p-5 lg:p-6 principal-box">
        <div className="">
          <h1 className="mb-5 text-title-sm font-bold lg:mb-7 text-white ">
           Le Nostre Dispense
          </h1>
        
            <div className="space-y-6 mb-5">
              <BoxDispensa />
            </div>
        </div>
            </div>  
      </div>
      <MenuMobile />
      </>
  );
}

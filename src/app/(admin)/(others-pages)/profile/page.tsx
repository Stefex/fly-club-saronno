
import SocioInfo from "@/components/user-profile/SocioInfo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fly Angling Club Saronno | Consiglio Direttivo",
  description:
    "",
};

export default function Profile() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h1 className="mb-5 text-lg font-bold text-gray-800 dark:text-white/90 lg:mb-7">
         Consiglio Direttivo
        </h1>
        <div className="space-y-6">
          <SocioInfo />
        </div>
      </div>
    </div>
  );
}

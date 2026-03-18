"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const CardBenvenuto= () => {
  return (
    
    <div className="grid w-full grid-cols-1 mb-4 md:mb-0 box-card">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl p-5 md:p-6">

        <div className="flex items-end justify-between">
          <div>
             <h4 className="font-bold  text-title-lg">
              Ciao 👋🏻
            </h4>
            <span className="text-sm ">
              Benvenuto nell'app del Fly Angling Club Saronno
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

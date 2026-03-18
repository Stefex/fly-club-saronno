"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon,  ArrowRightIcon, BoxIconLine, GroupIcon, DocsIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button"; 

export const CardStoriaSoci = () => {
  return (
    
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border p-5 md:p-6 box-card">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-white box-card box-card-text text-small-card">
              Siamo
            </span>
            <h4 className="mt-2 font-bold  text-title-sm ">
              40 Soci
            </h4>
          </div>
          <Button size="md" variant="primary" endIcon={<ArrowRightIcon/>}>
              Scopri di più
            </Button>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

       <div className="rounded-2xl border p-5 md:p-6 box-card">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <DocsIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <span className="text-sm " >
              Scopri la nostra
            </span>
            <h4 className="mt-2 font-bold text-title-sm">
              Storia
            </h4>
          </div>
           {/* Outline Button with Start Icon */}
           
            
            <Button size="md" variant="primary" endIcon={<ArrowRightIcon/>}>
              Scopri di più
            </Button>
        
  
        </div>
      </div>

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border p-5 md:p-6 box-card">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <DocsIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5 ">
          <div>
            <span className="text-sm " >
              Scopri gli
            </span>
            <h4 className="mt-2 font-bold text-title-sm">
              Eventi in programma
            </h4>
          </div>
           {/* Outline Button with Start Icon */}
           
            
            <Button size="md" variant="primary" endIcon={<ArrowRightIcon/>}>
              Scopri di più
            </Button>
        
  
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};

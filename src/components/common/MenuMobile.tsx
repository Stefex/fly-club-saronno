"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon,  ArrowRightIcon,  CalenderIcon ,BoxIconLine, GroupIcon, DocsIcon, GridIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button"; 
import Link from "next/link";
import { usePathname } from "next/navigation";


export const MenuMobile = () => {
  const pathname = usePathname();
  console.log(pathname); 
  return (


<div className="fixed z-50 w-full h-20 max-w-lg -translate-x-1/2 bg-neutral-primary-soft bottom-0 left-1/2 menu-black lg:hidden">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto ">
        
          <Link href="/" className={`menu-item first-item ${pathname === ("/") ? "active" : ""}`}>
          <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center">
              <GridIcon />
              <span >Home</span>
          </button>
          </Link>
        
          <Link className={`menu-item ${pathname === ("/consiglio-direttivo") ? "active" : ""}`} href="/consiglio-direttivo">
          <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center">
              <GroupIcon  />
              <span >Consiglio</span>
          </button>
          
          </Link>
          <Link className={`menu-item ${pathname === ("/calendar") ? "active" : ""}`} href="/calendar">
          <button data-tooltip-target="tooltip-calendar" type="button" className="inline-flex flex-col items-center justify-center">
              <CalenderIcon />
              <span >Eventi</span>
          </button>
          </Link>
    
    </div>
</div>
  );
};

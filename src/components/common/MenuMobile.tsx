"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon,  ArrowRightIcon, BoxIconLine, GroupIcon, DocsIcon } from "@/icons";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button"; 
import Link from "next/link";
import { usePathname } from "next/navigation";


export const MenuMobile = () => {
  const pathname = usePathname();
  console.log(pathname); 
  return (


<div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-neutral-primary-soft bottom-0 left-1/2 menu-black lg:hidden">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto ">
        
          <Link href="/" className={`menu-item ${pathname === ("/") ? "active" : ""}`}>
          <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor"  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
              <span >Home</span>
          </button>
          <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-medium text-white rounded-base shadow-xs opacity-0 tooltip">
              Home
              <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          </Link>
        
          <Link className={`menu-item ${pathname === ("/consiglio-direttivo") ? "active" : ""}`} href="/consiglio-direttivo">
          <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center">
              <svg className="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor"  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
              <span >Consiglio</span>
          </button>
          <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
              Consiglio
              <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          </Link>
    
    </div>
</div>
  );
};

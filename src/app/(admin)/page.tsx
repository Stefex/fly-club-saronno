import type { Metadata } from "next";
import { CardBenvenuto } from "@/components/card/CardBenvenuto";
import { CardStoriaSoci } from "@/components/card/CardStoriaSoci";
import React from "react";
import RecentOrders from "@/components/card/RecentOrders";

export const metadata: Metadata = {
  title:
    "Fly Angling Club Saronno E-commerce Dashboard | TailAdmin - Fly Angling Club Saronno Dashboard Template",
  description: "This is Fly Angling Club Saronno Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    
    <div className="grid md:gap-6 w-full">
       <div className="col-span-12 space-y-6 xl:col-span-7">
        <CardBenvenuto/>

      </div>
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <CardStoriaSoci />

      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}

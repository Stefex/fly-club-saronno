import type { Metadata } from "next";
import { CardBenvenuto } from "@/components/card/CardBenvenuto";
import { CardStoriaSoci } from "@/components/card/CardStoriaSoci";
import React from "react";
import RecentOrders from "@/components/card/RecentOrders";

export const metadata: Metadata = {
  title:
    "Fly Club Saronno",
  description: "App del Fly Club Saronno",
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

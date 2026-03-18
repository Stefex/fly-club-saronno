import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fy Angling Club Saornno Videos | TailAdmin - Fy Angling Club Saornno Dashboard Template",
  description:
    "This is Fy Angling Club Saornno Videos page for TailAdmin - Fy Angling Club Saornno Tailwind CSS Admin Dashboard Template",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />

      <VideosExample />
    </div>
  );
}

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fly Angling Club Saronno Videos | TailAdmin - Fly Angling Club Saronno Dashboard Template",
  description:
    "This is Fly Angling Club Saronno Videos page for TailAdmin - Fly Angling Club Saronno Tailwind CSS Admin Dashboard Template",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />

      <VideosExample />
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function ImgStoria() {
  return (
    <div className="relative foto-club">
      <div className="overflow-hidden">
        <Image
          src="/images/img/club_foto.jpg"
          alt="Cover"
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
          width={1054}
          height={600}
        />
      </div>
    </div>
  );
}

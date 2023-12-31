//AhriCard.tsx
import Image from "next/image";
import React from "react";
import Ahri from "../main/AhriElement";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string; // Add a link prop
}

const AhriCard = ({ src, title, description, link }: Props) => {
  return (
    <a href={link} className="block">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#a4111d]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default AhriCard;

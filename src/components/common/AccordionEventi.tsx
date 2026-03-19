"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "Domanda 1", content: "Risposta 1" },
    { title: "Domanda 2", content: "Risposta 2" },
    { title: "Domanda 3", content: "Risposta 3" },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#1d2939] text-white">
      <div className="w-full max-w-4xl mx-auto">

        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-gray-600">

              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <span className="text-lg font-medium">
                  {item.title}
                </span>

                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 p-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300">
                  {item.content}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
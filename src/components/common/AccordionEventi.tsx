"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Item = {
  title: string;
  content: string;
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: Item[] = [
    { title: "Domanda 1", content: "Risposta 1" },
    { title: "Domanda 2", content: "Risposta 2" },
    { title: "Domanda 3", content: "Risposta 3" },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        {items.map((item: Item, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`accordion-item ${isOpen ? "open" : ""}`}
            >
              <button
                onClick={() => toggle(index)}
                className="accordion-title"
              >
                <span>{item.title}</span>

                <ChevronDownIcon
                  className={`chevron ${isOpen ? "open" : ""}`}
                  width={20}
                  height={20}
                />
              </button>

              <div
                className={`accordion-content ${
                  isOpen ? "open" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
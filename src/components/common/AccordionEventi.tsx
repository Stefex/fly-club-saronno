"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/solid";
import eventi from "@/data/eventi.json";

type Evento = {
  tipologia: string;
  nome: string;
  luogo: string;
  data: string;
  indicazioni: string;
  coordinate: { lat: number; lng: number };
};

export default function AccordionEventi() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const apriMappe = (coordinate: { lat: number; lng: number }) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinate.lat},${coordinate.lng}`;
    window.open(url, "_blank");
  };

  const badgeColor = (tipologia: string) => {
    switch (tipologia.toLowerCase()) {
      case "concerto":
        return "bg-red-500";
      case "mostra":
        return "bg-purple-500";
      case "workshop":
        return "bg-green-500";
      case "teatro":
        return "bg-yellow-500";
      case "seminario":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  // Altezza dinamica con padding top/bottom solo all'apertura
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;

      if (openIndex === index) {
        ref.style.maxHeight = "0px";
        ref.style.paddingTop = "0px";
        ref.style.paddingBottom = "0px";

        requestAnimationFrame(() => {
          const scrollHeight = ref.scrollHeight;
          ref.style.maxHeight = scrollHeight + 24 + "px"; // padding-bottom incluso
          ref.style.paddingTop = "24px";
          ref.style.paddingBottom = "24px";
        });
      } else {
        ref.style.maxHeight = "0px";
        ref.style.paddingTop = "0px";
        ref.style.paddingBottom = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="accordion-container">
      <div className="accordion-wrapper">
        {(eventi as Evento[]).map((evento, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="accordion-item">
              {/* Titolo */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className="accordion-title"
              >
                <div className="flex items-center gap-2 badge-title-container">
                  <span className="data-evento">
                  {" "}
                  {new Date(evento.data).toLocaleString("it-IT", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </span>
                  <span className="font-bold">{evento.nome}</span><br></br>
                  <span className={`badge ${badgeColor(evento.tipologia)}`}>
                    {evento.tipologia}
                  </span>
                  
                 
                </div>
                <ChevronDownIcon
                  className={`chevron ${isOpen ? "open" : ""}`}
                  width={20}
                  height={20}
                />
              </button>

              {/* Contenuto */}
              <div
                ref={(el: HTMLDivElement | null) => {
                  contentRefs.current[index] = el;
                }}
                className="accordion-content"
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.3s ease, padding 0.3s ease",
                }}
              >
                <p><strong>Luogo:</strong> {evento.luogo}</p>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(evento.data).toLocaleString("it-IT", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p><strong>Indicazioni:</strong> {evento.indicazioni}</p>

                <button
                  type="button"
                  className="map-button"
                  onClick={() => apriMappe(evento.coordinate)}
                >
                  <MapPinIcon className="w-5 h-5" />
                  Apri Mappe
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
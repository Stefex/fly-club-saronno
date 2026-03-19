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
  descrizione: string;
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
      case "concerto": return "badge-red";
      case "mostra": return "badge-purple";
      case "workshop": return "badge-green";
      case "teatro": return "badge-yellow";
      case "seminario": return "badge-blue";
      default: return "badge-gray";
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;

      if (openIndex === index) {
        ref.style.maxHeight = "0px";
        ref.style.paddingTop = "0px";
        ref.style.paddingBottom = "0px";

        requestAnimationFrame(() => {
          const scrollHeight = ref.scrollHeight;
          ref.style.maxHeight = scrollHeight + 32 + "px";
          ref.style.paddingTop = "16px";
          ref.style.paddingBottom = "16px";
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
      {(eventi as Evento[]).map((evento, index: number) => {
        const isOpen = openIndex === index;
        const dataObj = new Date(evento.data);

        return (
          <div key={index} className="accordion-card">
            {/* HEADER */}
            <button
              type="button"
              onClick={() => toggle(index)}
              className="accordion-header"
            >
              <div className="accordion-header-left">
                <span className="evento-data">{dataObj.toLocaleDateString("it-IT")}</span>
                <span className="evento-orario">
                  {dataObj.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}
                </span>
                <span className="evento-titolo">{evento.nome}</span>
                <span className={`evento-badge ${badgeColor(evento.tipologia)}`}>
                  {evento.tipologia}
                </span>
              </div>

              <ChevronDownIcon
                className={`accordion-chevron ${isOpen ? "open" : ""}`}
              />
            </button>

            {/* CONTENUTO */}
            <div
              ref={(el: HTMLDivElement | null) => {
                contentRefs.current[index] = el; // ✅ fix TypeScript
              }}
              className="accordion-content"
            >
              <div className="accordion-content-inner">
                <p><strong>Luogo:</strong> {evento.luogo}</p>
                <p>
                  <strong>Data:</strong>{" "}
                  {dataObj.toLocaleString("it-IT", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p><strong>Indicazioni:</strong> {evento.indicazioni}</p>
                <p className="evento-descrizione"><strong>Descrizione:</strong> {evento.descrizione}</p>
                <button
                  type="button"
                  className="map-button"
                  onClick={() => apriMappe(evento.coordinate)}
                >
                  <MapPinIcon className="map-icon" />
                  Apri su Google Maps
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
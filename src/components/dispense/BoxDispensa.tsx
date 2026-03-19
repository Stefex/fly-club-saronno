import dispenseData from "@/data/dispense.json";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function BoxDispensa() {
  const dispense = dispenseData.dispense;

  const badgeColor = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "programmazione": return "bg-blue-600";
      case "matematica": return "bg-green-600";
      case "storia": return "bg-purple-600";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {dispense.map((item, index) => (
        <div
          key={index}
          className="p-5 rounded-2xl bg-[#1d2939] flex items-center justify-between hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          {/* Titolo + badge */}
          <div className="flex flex-col justify-center gap-2">
            <h4 className="text-white font-semibold text-lg">{item.titolo}</h4>
            <span className={`text-white px-3 py-1 text-sm rounded-full w-max ${badgeColor(item.categoria)}`}>
              {item.categoria}
            </span>
          </div>

          {/* Pulsante Scarica */}
          <a
            href={item.file}
            download
            className="px-5 py-2 text-base bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors duration-200"
            style={{ borderRadius: "20px" }}
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Scarica
          </a>
        </div>
      ))}
    </div>
  );
}
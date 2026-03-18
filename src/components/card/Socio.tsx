import consiglio from "@/data/consiglio.json";
import Image from "next/image";

export default function Socio() {
  const membri = consiglio.consiglio_direttivo;

  return (

    <>
      {membri.map((membro, index) => (
        <div key={index}>
            <div className="p-5 rounded-2xl grid md:grid-cols-3 lg:p-6 box-card">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden rounded-full ">
              <Image
                width={80}
                height={80}
                src={`/images/user/${membro.foto}`}
                alt="user"
              />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center xl:text-left text-white">
                <p>{membro.nome} {membro.cognome}</p>
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left text-white"> 
                 <h2>{membro.ruolo}</h2>
                <div className="hidden h-3.5 w-px xl:block"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      ))}
    </>
  );
}

"use client";
import { MenuMobile } from "../common/MenuMobile";
import ImgStoria from "@/components/ui/images/ImgStoria";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";


export const BoxStoria = () => {
  return (
    <>
    <div className="grid">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl p-5 md:p-6 sm:p-0 box-card box-storia"> 
        Il Fly Angling Club Sezione di Saronno è stato fondato nel 1985 da amici che desideravano 
        trasmettere ad altre persone 
        la loro passione per una disciplina nobile come la pesca a mosca. In oltre trent’anni di 
        attività la nostra attenzione è stata quella di diffondere la cultura e la tecnica di 
        questa meravigliosa disciplina. Fuggendo l’attività agonistica, ancora oggi ci 
        focalizziamo sulla didattica e sul divertimento del praticare in libertà ed 
        assieme la pesca con la coda di topo.
<br></br>
In un tempo ormai lontano, tre inseparabili amici pescatori a mosca, Francesco, Roberto 
e Dodo frequentavano saltuariamente il Fly Angling Club di Milano, dove conobbero uno 
dei padri fondatori della PAM in Italia, il grandissimo Carlo Rancati, persona speciale, 
non solo come esperto pescatore ma anche come uomo, prodigo di consigli con umiltà e grande 
disponibilità, in altre parole un gentleman.<br></br>
Rancati consigliò loro di fondare un Club come estensione del Fly di Milano, cosa che prese 
vita subito dopo, non senza difficoltà di natura pratica.<br></br>
In breve, tramite una quarta persona, Dino che gestiva un negozio di articoli di pesca, 
i primi soci arrivarono.<br></br>
Come l’acqua che passa, molte persone di ogni età sono passate negli anni, diventando bravi 
moscaioli grazie ai corsi annuali di lancio, costruzione ed etica di pesca.<br></br>
Molti di loro sono diventati amici accomunati da questa bellissima pesca.
    </div>
     <ImgStoria/>
</div>
<MenuMobile />
</>
  );
};

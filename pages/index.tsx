import { Inter } from "next/font/google";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";
import FormSimulation from "@/components/simulation/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
    <Header></Header>
      <div >
        <div className="mx-auto px-4 pt-[84px] max-w-screen-lg pb-8">
          <div className="flex flex-col">
            <h1 className="text-[#444444] text-[36px] font-bold">
              Simulação de Financiamento
            </h1>
            <span className="bg-[#7D28F7] w-[34px] h-[3px] mt-1"></span>
          </div>
        </div>
        <FormSimulation></FormSimulation>
      </div>
      <Footer></Footer>
    </main>
  );
}

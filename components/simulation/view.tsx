import Announcement from "@/entity/Announcement";
import CardCar from "../car/card";
import { FaWhatsapp } from "react-icons/fa";

interface Params {
    params: Announcement
}

const ResultSimulation = (announcementContent: Params) => {
    function formatBrlMoney(value: number): string {
        const formatBrl = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return formatBrl.format(value);
    }

    return (
        <div className="flex flex-col sm:flex-row gap-7 max-w-screen-lg sm:max-h-[400px] my-6 sm:my-[84px] sm:mx-auto  mx-2.5">
            <CardCar
                title={announcementContent.params.title}
                description={announcementContent.params.description}
                price={announcementContent.params.price}
                city={announcementContent.params.city}
                year={announcementContent.params.vehicle.year}
                mileage={announcementContent.params.vehicle.mileage}
                transmission={announcementContent.params.vehicle.transmission}
                imagePath={announcementContent.params.image_path}
            />


            <div className="mx-auto px-4 flex flex-col bg-[#FAFAFA] w-full max-w-screen-lg">
                <div className="py-6 flex flex-col gap-2">
                    <div className="hidden sm:block">
                        <div className="flex flex-col pb-2">
                            <h1 className="text-[#444444] text-[20px] font-bold">
                                Valores Simulados para você
                            </h1>
                            <span className="bg-[#7D28F7] w-[34px] h-[3px] mt-1"></span>
                        </div>
                    </div>


                    <div className="relative">
                        <div className="flex flex-col p-3 rounded-md bg-white sm:w-2/3 w-full drop-shadow-lg">

                            <div className="bg-[#7D28F7] absolute flex right-0 bottom-5 top-5 rounded-l-full">
                                <div className="flex flex-row items-center px-3 ">
                                    <span className="text-white text-[14px]">IPVA GRÁTIS</span>
                                </div>
                            </div>

                            <span className="text-[#44444] text-[16px]">{announcementContent.params.simulation[0].installment}X</span>
                            <span className="text-[#7D28F7] text-[25px] font-bold">
                                {formatBrlMoney(announcementContent.params.simulation[0].total)}
                            </span>
                        </div>
                    </div>


                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col p-3 rounded-md bg-white sm:w-1/3 w-full drop-shadow-lg">
                            <span className="text-[#44444] text-[16px]">
                                {announcementContent.params.simulation[1].installment}X
                            </span>
                            <span className="text-[#7D28F7] text-[25px] font-bold">
                                {formatBrlMoney(announcementContent.params.simulation[1].total)}
                            </span>
                        </div>
                        <div className="flex flex-col p-3 rounded-md bg-white sm:w-1/3 w-full drop-shadow-lg">
                            <span className="text-[#44444] text-[16px]">
                                {announcementContent.params.simulation[2].installment}X
                            </span>
                            <span className="text-[#7D28F7] text-[25px] font-bold">
                                {formatBrlMoney(announcementContent.params.simulation[2].total)}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row py-3 sm:pt-[43px] gap-3 items-center">
                        <button className="bg-[#4AC959] py-2 px-3 rounded-full fl">
                            <div className="flex flex-row px-4">
                                <FaWhatsapp size={20} color="white" />
                                <span className="text-white pl-3"> Falar com o consultor</span>
                            </div>
                        </button>
                        <span className="text-[15px]">(31) 3441-0240</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ResultSimulation;
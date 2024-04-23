import Image from "next/image";
import { IoMdSpeedometer } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";

interface Content {
    title: string;
    description: string;
    price:number
    city: string,
    year: number;
    mileage: number;
    transmission: string;
}

const CardCar = (params: Content) => {
    function formatBrlMoney(value: number): string {
        const formatBrl = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return formatBrl.format(value);
    }

    return (
        <div className="flex flex-col drop-shadow-md">
            <div className="relative">
                <div className="bg-white absolute flex left-0 bottom-4 rounded-r-full">
                    <div className="flex flex-row gap-2 items-center px-3 py-0.5">
                        <MdLocationOn color="#7D28F7" />
                        <span>{params.city}</span>
                    </div>
                </div>

                <Image src={"/assets/file.jpeg"}
                    width={0}
                    height={0}
                    alt="foto do carro"
                    sizes="100vw"
                    className="w-[410px] h-[200px]"
                />

            </div>
            <div className="bg-white flex flex-col rounded-b-lg">
                <div className="px-3.5 py-3.5">
                    <h2 className="text-[#444444] text-[20px] font-bold ">{params.title}</h2>
                    <span className="text-[#444444] text-[14px] font-normal">{params.description}</span>
                    <div className="flex flex-row gap-2 py-4">
                        <div className="flex items-center gap-1">
                            <CiCalendar size={18} />
                            <span className="text-[#444444] text-[14px] font-normal">{params.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoMdSpeedometer size={18} />
                            <span className="text-[#444444] text-[14px] font-normal">{params.mileage} Km</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GoGear size={18} />
                            <span className="text-[#444444] text-[14px] font-normal">{params.transmission}</span>
                        </div>
                    </div>

                    <h1 className="text-[#444444] text-[26px] font-bold ">{formatBrlMoney(params.price)} </h1>

                </div>
            </div>

        </div>
    );
}

export default CardCar;
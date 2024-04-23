import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import axios from 'axios';
import BuildSimulationDTO from '@/dto/BuildSimulation';
import Announcement from '@/entity/Announcement';
import Swal from 'sweetalert2';
import ResultSimulation from './view';

interface ListAnnouncementOptions {
    announcement_id: string;
    announcement_price: number,
    vehicle_brand: string;
    vehicle_model: string;
    vehicle_year: number;
}

interface Options {
    value: string,
    label: string
}

function formatBrlMoney(value: number): string {
    const formatBrl = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return formatBrl.format(value);
}

const FormSimulation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAdditionalField, setShowAdditionalField] = useState(false);
    const [additionalFieldValue, setAdditionalFieldValue] = useState('');
    const [announcementContent, setAnnouncementContent] = useState(null);

    const getAnnouncementOptions = (inputValue: string) =>
        new Promise<Options[]>((resolve) => {
            setIsLoading(true);
            axios({
                method: "get",
                url: `http://localhost:8080/api/announcements/?search=${inputValue}`,
                headers: {
                    "x-api-key": "01HVYX4Q6SV0D67DM1XX9AHC0X"
                },
            }).then(response => {
                setIsLoading(false);
                const data: ListAnnouncementOptions[] = response.data.data

                const options: Options[] = data.map((item: ListAnnouncementOptions) => ({
                    value: item.announcement_id,
                    label: `${item.vehicle_brand} ${item.vehicle_model} | ${item.vehicle_year} | ${formatBrlMoney(item.announcement_price)}`
                }))

                resolve(options);

            }).catch(error => {
                setIsLoading(false);
                console.error('Erro ao buscar os dados da API:', error);
                resolve([]);

            });
        });

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption.value);
        setShowAdditionalField(true);
    };

    const handleAdditionalFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            setAdditionalFieldValue(value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData: BuildSimulationDTO = {
            id: selectedOption,
            inputValue: additionalFieldValue,
            installments: [6, 12, 48]
        };

        buildSimulation(formData)
    };

    const buildSimulation = (buildDto: BuildSimulationDTO) => {
        axios({
            method: "post",
            url: `http://localhost:8080/api/announcements/simulation/${buildDto.id}`,
            headers: {
                "x-api-key": "01HVYX4Q6SV0D67DM1XX9AHC0X"
            },
            data: {
                "input_value": buildDto.inputValue,
                "installments": buildDto.installments
            }
        }).then(response => {
            const data: Announcement = response.data.data

            setAnnouncementContent(data)
        }).catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                showConfirmButton: false
            })
        });
    }

    return (
        <div>
            <div className="px-4 bg-white max-w-screen-lg sm:mx-auto mx-2.5">
                <div className='flex flex-col py-8 px-8'>
                    <span className='size-[18] font-bold pb-4'>
                        Selecione um veiculo que deseja simular o financiamento
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col sm:flex-row gap-6'>
                            <AsyncSelect className="w-[300px]"
                                placeholder="Selecionar"
                                instanceId={"formAnnouncement"}
                                cacheOptions
                                defaultOptions
                                loadOptions={getAnnouncementOptions}
                                onChange={handleChange}
                            />
                            {showAdditionalField && (
                                <input
                                    type="text"
                                    placeholder="Digite valor da entrada"
                                    className="border rounded px-4 py-2"
                                    value={additionalFieldValue}
                                    onChange={handleAdditionalFieldChange}
                                />

                            )}

                            <button type='submit' className='bg-[#7D28F7] rounded-[50px]'>
                                <span className='text-white font-bold px-[65px] py-[10px] sm:py-2.5'>
                                    Simular
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {announcementContent != null && (
                    <ResultSimulation params={announcementContent} />
                )}
        </div>
    );
}

export default FormSimulation
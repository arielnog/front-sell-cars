import Vehicle from "./Vehicle";

interface Simulation {
    installment: number;
    total: number;
}

export default interface Announcement{
    uuid: string;
    title: string;
    description: string;
    status: string;
    city: string;
    price: number;
    phone_number: string;
    vehicle: Vehicle;
    simulation: Simulation[];
}
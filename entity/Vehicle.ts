export default interface Vehicle {
    uuid: string;
    year: number;
    model: string;
    brand: string;
    license_plate: string;
    status: string;
    mileage: number;
    transmission: string;
    announcement_id: string | null;
  }
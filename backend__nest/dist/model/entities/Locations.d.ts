import { Departments } from "./Departments";
import { Countries } from "./Countries";
export declare class Locations {
    locationId: number;
    streetAddress: string | null;
    postalCode: string | null;
    city: string | null;
    stateProvince: string | null;
    departments: Departments[];
    country: Countries;
}

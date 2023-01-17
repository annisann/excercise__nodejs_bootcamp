import { Regions } from "./Regions";
import { Locations } from "./Locations";
export declare class Countries {
    countryId: string;
    countryName: string | null;
    region: Regions;
    locations: Locations[];
}

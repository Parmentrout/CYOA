import { Activity } from './index';

export class Location {
    dateId: number; //FK to Date
    locationId: number;
    name: string;
    address: string;
    activities: Activity[];
}
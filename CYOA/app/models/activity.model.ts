
export class Activity {
    type: string;
    activityId: number;
    activityOrder: number;
    locationId: number; //FK to Location
    name: string;
    address: string;
    description: string;
    optionId: number;
}
import { Date, Activity, Location } from '../models/index';

export var MOCKDATE: Date = new Date();
MOCKDATE = {
    dateId: 1,
    locations: 
       [
        {
            locationId: 1, name: 'Uptown', address: '123 abc', dateId: 1, activities:
            [
                {
                    name: 'UptownActivity1op1', type: 'first', address: '123', locationId: 1, activityOrder: 1, optionId: 1, description: 'My Description' },
                { name: 'UptownActivity1op2', type: 'first', address: '1230', locationId: 1, activityOrder: 1, optionId: 2, description: 'My Description2' },
                { name: 'UptownActivity2op1', type: 'second', address: '1231', locationId: 1, activityOrder: 2, optionId: 1, description: 'My Description3' },
                { name: 'UptownActivity2op2', type: 'second', address: '1232', locationId: 1, activityOrder: 2, optionId: 2, description: 'My Description4' },
                { name: 'UptownActivity3op1', type: 'first', address: '1233', locationId: 1, activityOrder: 3, optionId: 1, description: 'My Description5' },
                { name: 'UptownActivity3op2', type: 'first', address: '1234', locationId: 1, activityOrder: 3, optionId: 2, description: 'My Description6' }
            ]
        },
        {
            locationId: 2, name: 'Downtown', address: '123 downtown', dateId: 1, activities:
            [
                { name: 'DowntownActivity1op1', type: 'first', address: '123', locationId: 2, activityOrder: 1, optionId: 1, description: 'My Description1' },
                { name: 'DowntownActivity1op2', type: 'first', address: '1230', locationId: 2, activityOrder: 1, optionId: 2, description: 'My Description2' },
                { name: 'DowntownActivity2op1', type: 'second', address: '1231', locationId: 2, activityOrder: 2, optionId: 1, description: 'My Description3' },
                { name: 'DowntownActivity2op2', type: 'second', address: '1232', locationId: 2, activityOrder: 2, optionId: 2, description: 'My Description4' },
                { name: 'DowntownActivity3op1', type: 'third', address: '1233', locationId: 2, activityOrder: 3, optionId: 1,description: 'My Description5' },
                { name: 'DowntownActivity3op2', type: 'third', address: '1234', locationId: 2, activityOrder: 3, optionId: 2, description: 'My Description6' }
            ]
        }
    ]
}
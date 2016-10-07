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
                    activityId: 1, name: 'UptownActivity1op1', type: 'first', address: '123', locationId: 1, activityOrder: 1, optionId: 1, description: 'My Description' },
                { activityId: 2, name: 'UptownActivity1op2', type: 'first', address: '1230', locationId: 1, activityOrder: 1, optionId: 2, description: 'My Description2' },
                { activityId: 3, name: 'UptownActivity2op1', type: 'second', address: '1231', locationId: 1, activityOrder: 2, optionId: 1, description: 'My Description3' },
                { activityId: 4, name: 'UptownActivity2op2', type: 'second', address: '1232', locationId: 1, activityOrder: 2, optionId: 2, description: 'My Description4' },
                { activityId: 5, name: 'UptownActivity3op1', type: 'first', address: '1233', locationId: 1, activityOrder: 3, optionId: 1, description: 'My Description5' },
                { activityId: 6, name: 'UptownActivity3op2', type: 'first', address: '1234', locationId: 1, activityOrder: 3, optionId: 2, description: 'My Description6' }
            ]
        },
        {
            locationId: 2, name: 'Downtown', address: '123 downtown', dateId: 1, activities:
            [
                { activityId: 7, name: 'DowntownActivity1op1', type: 'first', address: '123', locationId: 2, activityOrder: 1, optionId: 1, description: 'My Description1' },
                { activityId: 8, name: 'DowntownActivity1op2', type: 'first', address: '1230', locationId: 2, activityOrder: 1, optionId: 2, description: 'My Description2' },
                { activityId: 9, name: 'DowntownActivity2op1', type: 'second', address: '1231', locationId: 2, activityOrder: 2, optionId: 1, description: 'My Description3' },
                { activityId: 10, name: 'DowntownActivity2op2', type: 'second', address: '1232', locationId: 2, activityOrder: 2, optionId: 2, description: 'My Description4' },
                { activityId: 11, name: 'DowntownActivity3op1', type: 'third', address: '1233', locationId: 2, activityOrder: 3, optionId: 1,description: 'My Description5' },
                { activityId: 12, name: 'DowntownActivity3op2', type: 'third', address: '1234', locationId: 2, activityOrder: 3, optionId: 2, description: 'My Description6' }
            ]
        }
    ]
}
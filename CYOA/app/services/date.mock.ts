import { Date, Activity, Location } from '../components/index';

export var MOCKDATE: Date = new Date();
MOCKDATE.dateId = 1;
MOCKDATE.locations = [{ name: 'Uptown', address: '123 abc' }, { name: 'Downtown', address: '123 downtown' }];
MOCKDATE.activities = [
    { name: 'UptownActivity1op1', type: 'first', address: '123' },
    { name: 'UptownActivity2op1', type: 'second', address: '123' },
    { name: 'UptownActivity3op1', type: 'first', address: '123' },
    { name: 'UptownActivity1op2', type: 'first', address: '123' },
    { name: 'UptownActivity2op2', type: 'first', address: '123' },
    { name: 'UptownActivity3op2', type: 'first', address: '123' },
]
"use strict";
var index_1 = require('../components/index');
exports.MOCKDATE = new index_1.Date();
exports.MOCKDATE.dateId = 1;
exports.MOCKDATE.locations = [{ name: 'Uptown', address: '123 abc' }, { name: 'Downtown', address: '123 downtown' }];
exports.MOCKDATE.activities = [
    { name: 'UptownActivity1op1', type: 'first', address: '123' },
    { name: 'UptownActivity2op1', type: 'second', address: '123' },
    { name: 'UptownActivity3op1', type: 'first', address: '123' },
    { name: 'UptownActivity1op2', type: 'first', address: '123' },
    { name: 'UptownActivity2op2', type: 'first', address: '123' },
    { name: 'UptownActivity3op2', type: 'first', address: '123' },
];
//# sourceMappingURL=date.mock.js.map
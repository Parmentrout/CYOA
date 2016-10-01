import { Date } from '../models/date.model';
import { MOCKDATE } from './date.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
    getDates(): Promise<Date> {
        return Promise.resolve(MOCKDATE);
    }

    //getDate(id: number): Promise<Date> {
    //    return this.getDates()
    //        .then(heroes => heroes.find(hero => hero.id === id));
    //}
}

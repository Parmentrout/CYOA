import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
import { Date } from '../models/date.model';

@Component({
    moduleId: module.id,
    selector: 'my-date',
    templateUrl: 'date.component.html'
})
export class DateComponent implements OnInit {
    date: Date = new Date();

    constructor(private _dateService: DateService) {
    }

    ngOnInit() {
        this._dateService.getDates()
            .then(date => this.date = date);
    }
}
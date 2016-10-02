import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
import { Date, Activity, Location } from '../models/index';

@Component({
    moduleId: module.id,
    selector: 'my-date',
    templateUrl: 'date.component.html'
})
export class DateComponent implements OnInit {
    date: Date = new Date();
    activitiesEnabled: boolean = false;
    locationSelected: Location;
    currentActivities: Activity[];
    currentActivityOrder: number;

    constructor(private _dateService: DateService) {
    }

    ngOnInit() {
        this._dateService.getDates()
            .then(date => this.date = date);
    }

    onselect(): void {
        console.log('Selected');
    }

    startActivities(location: Location): void {
        //Find current activity set from location ID
        this.locationSelected = location;
        this.currentActivityOrder = 0;

        this.activitiesEnabled = true;
        this.goToActivities();
    }

    showActivityDetails(): void {

    }

    goToActivities(): void {
        this.currentActivityOrder++;
        this.currentActivities = this.locationSelected.activities.filter(act => act.activityOrder === this.currentActivityOrder);
    }
}
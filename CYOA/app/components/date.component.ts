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
    detailsShown: boolean = false;
    locationSelected: Location;
    currentActivities: Activity[];
    currentActivityOrder: number;
    locationShown: boolean = true;

    constructor(private _dateService: DateService) {
    }

    startDate() {
        this.locationShown = true;
        this._dateService.getDates()
            .then(date => this.date = date);
    }

    ngOnInit() {
        
    }

    startActivities(location: Location): void {
        //Hide locations
        this.locationShown = false;

        //Find current activity set from location ID
        this.locationSelected = location;
        this.currentActivityOrder = 0;

        this.activitiesEnabled = true;
        this.goToActivities();
    }

    showActivityDetails(activity: Activity): void {

        // Get other activity
        let hiddenActivity = this.currentActivities.filter(act => act.optionId !== activity.optionId)[0];
        $('#activity' + hiddenActivity.activityId).hide('slow');
        this.detailsShown = true;
    }

    //Move on to next activity
    goToActivities(): void {
        this.detailsShown = false;
        this.currentActivityOrder++;
        this.currentActivities = this.locationSelected.activities.filter(act => act.activityOrder === this.currentActivityOrder);

        if (this.currentActivities.length === 0) {
            this.locationShown = true;
        }
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var date_service_1 = require('../services/date.service');
var index_1 = require('../models/index');
var DateComponent = (function () {
    function DateComponent(_dateService) {
        this._dateService = _dateService;
        this.date = new index_1.Date();
        this.activitiesEnabled = false;
        this.detailsShown = false;
        this.locationShown = true;
    }
    DateComponent.prototype.startDate = function () {
        var _this = this;
        this.locationShown = true;
        this._dateService.getDates()
            .then(function (date) { return _this.date = date; });
    };
    DateComponent.prototype.ngOnInit = function () {
    };
    DateComponent.prototype.startActivities = function (location) {
        //Hide locations
        this.locationShown = false;
        //Find current activity set from location ID
        this.locationSelected = location;
        this.currentActivityOrder = 0;
        this.activitiesEnabled = true;
        this.goToActivities();
    };
    DateComponent.prototype.showActivityDetails = function (activity) {
        // Get other activity
        var hiddenActivity = this.currentActivities.filter(function (act) { return act.optionId !== activity.optionId; })[0];
        $('#activity' + hiddenActivity.activityId).hide('slow');
        this.detailsShown = true;
    };
    //Move on to next activity
    DateComponent.prototype.goToActivities = function () {
        var _this = this;
        this.detailsShown = false;
        this.currentActivityOrder++;
        this.currentActivities = this.locationSelected.activities.filter(function (act) { return act.activityOrder === _this.currentActivityOrder; });
        if (this.currentActivities.length === 0) {
            this.locationShown = true;
        }
    };
    DateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-date',
            templateUrl: 'date.component.html'
        }), 
        __metadata('design:paramtypes', [date_service_1.DateService])
    ], DateComponent);
    return DateComponent;
}());
exports.DateComponent = DateComponent;
//# sourceMappingURL=date.component.js.map
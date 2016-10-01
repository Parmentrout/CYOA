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
var date_model_1 = require('../models/date.model');
var DateComponent = (function () {
    function DateComponent(_dateService) {
        this._dateService = _dateService;
        this.date = new date_model_1.Date();
    }
    DateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dateService.getDates()
            .then(function (date) { return _this.date = date; });
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
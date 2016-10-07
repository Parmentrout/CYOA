"use strict";
var router_1 = require('@angular/router');
var date_component_1 = require('./components/date.component');
var builder_component_1 = require('./components/builder.component');
var home_component_1 = require('./components/home.component');
var appRoutes = [
    {
        path: 'builder',
        component: builder_component_1.BuilderComponent
    },
    {
        path: 'date',
        component: date_component_1.DateComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map
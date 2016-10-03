import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateComponent }  from './components/date.component';
import { BuilderComponent }  from './components/builder.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    {
        path: 'builder',
        component: BuilderComponent
    },
    {
        path: 'date',
        component: DateComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
    //{
    //    path: '',
    //    component: AppComponent
    //}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

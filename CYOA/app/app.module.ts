import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { BuilderComponent } from './components/builder.component';
import { DateComponent } from './components/date.component';
import { HomeComponent } from './components/home.component';
import { DateService } from './services/date.service';
//import { Activity, Date, Location} from './components/index';


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, BuilderComponent, DateComponent, HomeComponent],
    providers: [DateService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title }}</h1>
    <nav>
        <a routerLink="/date" routerLinkActive= "active"> My Date </a>
        <a routerLink= "/builder" routerLinkActive= "active"> Date Builder </a>
    </nav>
    <router-outlet> </router-outlet>
`
})
export class AppComponent {
    title = 'Create your own Adventure Date!';
}

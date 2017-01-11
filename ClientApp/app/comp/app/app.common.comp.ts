import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'jmtitle',
    template: require('./app.common.title.html'),
    styles: [require('./app.common.title.css')]
})
export class titleComponent {
    whatDateTime = Observable.interval(1000).map(x => new Date()).share();
}

@Component({
    selector: 'jmnavbar',
    template: require('./app.common.navbar.html'),
    styles: [require('./app.common.navbar.css')]
})
export class navbarComponent {
}
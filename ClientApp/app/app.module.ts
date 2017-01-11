import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';


import { AppComponent, titleComponent, navbarComponent } from './comp/app';
import { jmSprModule } from './comp/spr/'


//import { DevExtremeModule } from 'devextreme-angular'; 

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent, titleComponent, navbarComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        jmSprModule
        //DevExtremeModule
    ]
})
export class AppModule {
}

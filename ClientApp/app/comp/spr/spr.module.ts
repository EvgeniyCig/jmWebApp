import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { AgGridModule } from "ag-grid-ng2/main";

import { sprCommon } from './spr.common';

@NgModule({
    imports: [
        AgGridModule.withComponents([])
    ],
    declarations: [ sprCommon ],
    exports: [ sprCommon ]
})
export class jmSprModule {
}
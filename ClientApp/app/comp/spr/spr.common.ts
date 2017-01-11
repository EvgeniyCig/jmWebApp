import { Component } from '@angular/core';

import { AgGridNg2 } from 'ag-grid-ng2/main';
import { GridOptions, RowNode, GridApi } from 'ag-grid/main';

import { jSprService } from './spr.service';

@Component({
    selector: 'jmspr',
    template: require('./spr.common.html'),
    styles: [require('./spr.common.css')],
    providers: [jSprService]
})
export class sprCommon {
    errorMessage: string;

    private gridOptions: GridOptions;
    public sprData: jmspr[];
    private columnDefs: any[];

    constructor(private jSprSrv: jSprService) {
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
    }

    private createRowData() {
        this.jSprSrv.getSpr()
            .subscribe(
            (data) => this.sprData = data,
            error => this.errorMessage = <any>error);
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', field: 'id', width: 80
            },
            {
                headerName: 'Descr', field: 'descr', width: 200, editable: true
            }
        ];
    }

    private onEvent($event: KeyboardEvent) {
        //        console.log($event);
        if ($event.key === "ArrowDown" && $event.ctrlKey === true) {
            this.jSprAdd();
        }
    }

    jSprAdd() {  //Добавление новой строки в таблицу (обязательно только одной)
        this.gridOptions.api.addItems([new jmspr()]);
    }

    private onitemsAdded($event) { //При добавлении новой строки, ставим фокус в поле "descr" в этой новой строке (для удобства)
        $event.rowNodes[0].setSelected(true, true);
        this.gridOptions.api.ensureNodeVisible($event.rowNodes[0]);
        this.gridOptions.api.setFocusedCell($event.rowNodes[0].rowIndex, "descr");
    }


    jSprDel() {
        // для удаления
    }

    private rowValueChanged($event) {
//        console.log($event);
        if ($event.oldValue != $event.newValue) {
            this.jSprSrv.putSpr($event.data)
                .subscribe(
                (data) => {
                    if ($event.node.data.id == 0) {
                        $event.node.data.id = data[0].id;
                        (function (_node: RowNode, _api: GridApi) {
                            _api.refreshRows([_node]);
                            _api.setSortModel(_api.getSortModel());
                            _api.ensureNodeVisible(_node);
                            _api.setFocusedCell(_node.rowIndex, "descr");
                        } ($event.node, this.gridOptions.api));
//                        this.gridOptions.api.refreshRows([$event.node]);
                    }
                },
                error => this.errorMessage = <any>error);
        }
    }

    private onCellFocused($event) {
        (function (_node: RowNode) {
            if (_node.isSelected() != true) _node.setSelected(true);
        } (this.gridOptions.api.getModel().getRow($event.rowIndex)));
    }


    jSprTest() {   // Просто для всяких проверок ... потом - удалить


        if (this.gridOptions.api.getSelectedNodes().length === 1) {
            (function (_node: RowNode, _api: GridApi) {
                _node.data.id = 10;
                _api.refreshRows([_node]);
                _api.setSortModel(_api.getSortModel());
                _api.ensureNodeVisible(_node);
                _api.setFocusedCell(_node.rowIndex, "descr");
            } (this.gridOptions.api.getSelectedNodes()[0], this.gridOptions.api));

        }

        //let mf = (_node: RowNode, _api: GridApi) => {
        //    _node.data.id = 10;
        //    _api.refreshRows([_node]);
        //    _api.setSortModel(_api.getSortModel());
        //    _api.ensureNodeVisible(_node);
        //    _api.setFocusedCell(_node.rowIndex, "descr");
        //}
        // mf(this.gridOptions.api.getSelectedNodes()[0], this.gridOptions.api);

        //let _nodes = this.gridOptions.api.getSelectedNodes();
        //if ( _nodes.length=1 ) {
        //    _nodes[0].data.id = 10;
        //    this.gridOptions.api.refreshRows(_nodes);
        //    this.gridOptions.api.setSortModel(this.gridOptions.api.getSortModel());
        //    this.gridOptions.api.ensureNodeVisible(_nodes[0]);
        //    this.gridOptions.api.setFocusedCell(_nodes[0].rowIndex, "descr");
        //}
    }        
}

export class jmspr {
    id: number;
    descr: string;
    constructor() {
        this.id = 0;
        this.descr = "";
    }
}
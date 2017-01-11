(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_1 = __webpack_require__(6);
	var _1 = __webpack_require__(20);
	//import { DevExtremeModule } from 'devextreme-angular'; 
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_1.AppComponent],
	        declarations: [
	            app_1.AppComponent, app_1.titleComponent, app_1.navbarComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            _1.jmSprModule
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(12));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div id=\"jmAll\">\r\n    <jmtitle></jmtitle>\r\n    <jmnavbar></jmnavbar>\r\n    <div id=\"jmPage\">\r\n        <jmspr></jmspr>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "#jmAll {\r\n    padding-right: 0px;\r\n    padding-left: 284px;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    min-width: 900px;\r\n}\r\n\r\n#jmPage {\r\n    width: calc(100% - 2px);\r\n    padding: 5px;\r\n    background-color: #252526;\r\n    display: block!important;\r\n    min-height: calc(100vh - 53px);\r\n}", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var rxjs_1 = __webpack_require__(13);
	var titleComponent = (function () {
	    function titleComponent() {
	        this.whatDateTime = rxjs_1.Observable.interval(1000).map(function (x) { return new Date(); }).share();
	    }
	    return titleComponent;
	}());
	titleComponent = __decorate([
	    core_1.Component({
	        selector: 'jmtitle',
	        template: __webpack_require__(14),
	        styles: [__webpack_require__(15)]
	    }),
	    __metadata("design:paramtypes", [])
	], titleComponent);
	exports.titleComponent = titleComponent;
	var navbarComponent = (function () {
	    function navbarComponent() {
	    }
	    return navbarComponent;
	}());
	navbarComponent = __decorate([
	    core_1.Component({
	        selector: 'jmnavbar',
	        template: __webpack_require__(17),
	        styles: [__webpack_require__(18)]
	    }),
	    __metadata("design:paramtypes", [])
	], navbarComponent);
	exports.navbarComponent = navbarComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<header class=\"dashboard-header\">\r\n    <div class=\"supervisor-info\">\r\n        <div class=\"avatar\"></div>\r\n        <div class=\"name\">Цыганков Евгений</div>\r\n    </div>\r\n    <div class=\"dashboard-title\">\r\n        <span class=\"title\">ALM-CIS</span>\r\n        <div class=\"date\" id=\"currentDate\" (updateTime)=\"updateMyTime()\">{{ whatDateTime | async | date:'dd-MM-yyyy' }}&nbsp;{{ whatDateTime | async | date:'shortTime' }}</div>\r\n    </div>\r\n</header>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(16);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".dashboard-header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    height: 52px;\r\n    padding: 6px 0 0 0;\r\n    background: #13080e;\r\n    min-width: 900px;\r\n    border-bottom: 1px;\r\n    border-bottom-color: #337ab7;\r\n    border-bottom-style: solid;\r\n}\r\n\r\n    .dashboard-header .supervisor-info {\r\n        margin: 0 0 0 25px;\r\n        width: 257px;\r\n        float: left;\r\n        color: rgba(255,255,255, .45);\r\n        font-size: 24px;\r\n        font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Helvetica, 'Droid Sans', Tahoma, Geneva, sans-serif;\r\n        font-weight: 200;\r\n    }\r\n\r\n.supervisor-info .avatar {\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: 0px 12px 0 0;\r\n    float: left;\r\n    -moz-background-size: 36px 36px;\r\n    -o-background-size: 36px 36px;\r\n    -webkit-background-size: 36px 36px;\r\n    background-size: 36px 36px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.supervisor-info .name {\r\n    padding: 4px 0 0 0;\r\n}\r\n\r\n.dashboard-header .dashboard-title {\r\n    margin: 0 0 0 282px;\r\n    padding: 4px 20px 0 27px;\r\n    height: 34px;\r\n    border: 0px solid rgba(255,255,255,0.20);\r\n    border-width: 0 0 0 1px;\r\n}\r\n\r\n.dashboard-title .title {\r\n    color: #bebebe;\r\n    font-size: 24px;\r\n    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Helvetica, 'Droid Sans', Tahoma, Geneva, sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.dashboard-title .date {\r\n    float: right;\r\n    padding: 8px 0 0 0;\r\n    color: rgba(255,255,255, .45);\r\n    font-size: 18px;\r\n    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Helvetica, 'Droid Sans', Tahoma, Geneva, sans-serif;\r\n    font-weight: 200;\r\n}", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jmnavbar collapse navbar-collapse navbar-ex1-collapse\">\r\n    <ul class=\"nav\">\r\n        <li class=\"nav-header\"><span class=\"glyphicon glyphicon-cog\"></span>Администрирование</li>\r\n        <li><a href=\"#\"><span class='glyphicon glyphicon-user'></span>Пользователи</a></li>\r\n        <li><a href=\"#\"><span class='glyphicon glyphicon-list-alt'></span>Справочники</a></li>\r\n        <li class=\"nav-divider\"></li>\r\n    </ul>\r\n</div>"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(19);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".jmnavbar {\r\n    margin: 52px 0 0 0;\r\n    width: 282px;\r\n    min-height: 696px;\r\n    float: left;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0;\r\n    bottom: 0px;\r\n    font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Helvetica, 'Droid Sans', Tahoma, Geneva, sans-serif;\r\n    background: #252830;\r\n}\r\n\r\n.nav {\r\n    padding-top: 10px;\r\n}\r\n\r\n    .nav > ul {\r\n        list-style: none;\r\n        border-width: 0 0 0 0;\r\n    }\r\n\r\n    .nav > li {\r\n        color: #cfd2da;\r\n        font-weight: 500;\r\n        font-size: 18px;\r\n        font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Helvetica, 'Droid Sans', Tahoma, Geneva, sans-serif;\r\n        letter-spacing: 1.05px;\r\n\r\n    }\r\n    .nav > li > a {\r\n        color: #cfd2da;\r\n        padding-top: 10px;\r\n        padding-bottom: 12px;\r\n    }\r\n\r\n    .nav > li > a:hover,\r\n    .nav > li > a:focus {\r\n      text-decoration: none;\r\n      background-color: #252526;\r\n    }\r\n\r\n    .nav > li .glyphicon {\r\n        float: left;\r\n        margin: 0 8px 0 0;\r\n    }\r\n\r\n    .nav > .nav-header {\r\n        color: #ffffff;\r\n        font-size: 20px;\r\n        padding: 8px 8px 10px 0px;\r\n    }\r\n\r\n\r\n    .nav > .nav-divider {\r\n        height: 1px;\r\n        margin: 9px 0;\r\n        overflow: hidden;\r\n        background-color: #337ab7;\r\n    }\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(21));
	__export(__webpack_require__(30));
	__export(__webpack_require__(22));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var spr_service_1 = __webpack_require__(22);
	var sprCommon = (function () {
	    function sprCommon(jSprSrv) {
	        this.jSprSrv = jSprSrv;
	        this.gridOptions = {};
	        this.createRowData();
	        this.createColumnDefs();
	    }
	    sprCommon.prototype.createRowData = function () {
	        var _this = this;
	        this.jSprSrv.getSpr()
	            .subscribe(function (data) { return _this.sprData = data; }, function (error) { return _this.errorMessage = error; });
	    };
	    sprCommon.prototype.createColumnDefs = function () {
	        this.columnDefs = [
	            {
	                headerName: '#', field: 'id', width: 80
	            },
	            {
	                headerName: 'Descr', field: 'descr', width: 200, editable: true
	            }
	        ];
	    };
	    sprCommon.prototype.onEvent = function ($event) {
	        //        console.log($event);
	        if ($event.key === "ArrowDown" && $event.ctrlKey === true) {
	            this.jSprAdd();
	        }
	    };
	    sprCommon.prototype.jSprAdd = function () {
	        this.gridOptions.api.addItems([new jmspr()]);
	    };
	    sprCommon.prototype.onitemsAdded = function ($event) {
	        $event.rowNodes[0].setSelected(true, true);
	        this.gridOptions.api.ensureNodeVisible($event.rowNodes[0]);
	        this.gridOptions.api.setFocusedCell($event.rowNodes[0].rowIndex, "descr");
	    };
	    sprCommon.prototype.jSprDel = function () {
	        // для удаления
	    };
	    sprCommon.prototype.rowValueChanged = function ($event) {
	        var _this = this;
	        //        console.log($event);
	        if ($event.oldValue != $event.newValue) {
	            this.jSprSrv.putSpr($event.data)
	                .subscribe(function (data) {
	                if ($event.node.data.id == 0) {
	                    $event.node.data.id = data[0].id;
	                    (function (_node, _api) {
	                        _api.refreshRows([_node]);
	                        _api.setSortModel(_api.getSortModel());
	                        _api.ensureNodeVisible(_node);
	                        _api.setFocusedCell(_node.rowIndex, "descr");
	                    }($event.node, _this.gridOptions.api));
	                }
	            }, function (error) { return _this.errorMessage = error; });
	        }
	    };
	    sprCommon.prototype.onCellFocused = function ($event) {
	        (function (_node) {
	            if (_node.isSelected() != true)
	                _node.setSelected(true);
	        }(this.gridOptions.api.getModel().getRow($event.rowIndex)));
	    };
	    sprCommon.prototype.jSprTest = function () {
	        if (this.gridOptions.api.getSelectedNodes().length === 1) {
	            (function (_node, _api) {
	                _node.data.id = 10;
	                _api.refreshRows([_node]);
	                _api.setSortModel(_api.getSortModel());
	                _api.ensureNodeVisible(_node);
	                _api.setFocusedCell(_node.rowIndex, "descr");
	            }(this.gridOptions.api.getSelectedNodes()[0], this.gridOptions.api));
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
	    };
	    return sprCommon;
	}());
	sprCommon = __decorate([
	    core_1.Component({
	        selector: 'jmspr',
	        template: __webpack_require__(27),
	        styles: [__webpack_require__(28)],
	        providers: [spr_service_1.jSprService]
	    }),
	    __metadata("design:paramtypes", [spr_service_1.jSprService])
	], sprCommon);
	exports.sprCommon = sprCommon;
	var jmspr = (function () {
	    function jmspr() {
	        this.id = 0;
	        this.descr = "";
	    }
	    return jmspr;
	}());
	exports.jmspr = jmspr;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(23);
	var http_2 = __webpack_require__(23);
	var Observable_1 = __webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	var jSprService = (function () {
	    function jSprService(http) {
	        this.http = http;
	        this.jUrl = 'http://localhost:5001/api/it/eq_vendors'; // URL to web API
	    }
	    jSprService.prototype.getSpr = function () {
	        return this.http.get(this.jUrl)
	            .map(this.extractData)
	            .catch(this.handleError);
	    };
	    jSprService.prototype.putSpr = function (_j) {
	        var options = new http_2.RequestOptions({ headers: new http_2.Headers({ 'Content-Type': 'application/json' }) });
	        var body = JSON.stringify(_j);
	        return this.http.post(this.jUrl, body, options)
	            .map(this.extractData)
	            .catch(this.handleError);
	    };
	    jSprService.prototype.extractData = function (res) {
	        //let body = res.json();
	        //return body.data || {};
	        return res.json();
	    };
	    jSprService.prototype.handleError = function (error) {
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return jSprService;
	}());
	jSprService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], jSprService);
	exports.jSprService = jSprService;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jmsprpanel panel panel-default\" style=\"width:440px\">\r\n    <div class=\"panel-heading\">\r\n\r\n<!--\r\n        <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"...\">\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"jSprAdd()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"jSprDel()\"><span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span></button>\r\n            <div class=\"divider-vertical\"></div>\r\n            <div class=\"input-group input-group-sm\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Поиск...\">\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"jSprDel()\"><span class=\"glyphicon glyphicon-folder-close\" aria-hidden=\"true\"></span></button>\r\n        </div>\r\n-->\r\n\r\n        <nav class=\"navbar navbar-inverse\">\r\n            <div class=\"container-fluid\">\r\n                <button type=\"button\" class=\"btn btn-default navbar-btn navbar-left\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" (click)=\"jSprAdd()\"></span></button>\r\n                <button type=\"button\" class=\"btn btn-default navbar-btn navbar-left\"><span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span></button>\r\n                <form class=\"navbar-form navbar-left\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Поиск...\">\r\n                    </div>\r\n                </form>\r\n                <button type=\"button\" class=\"btn btn-default navbar-btn navbar-right\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" (click)=\"jSprTest()\"></span></button>\r\n                </div>\r\n        </nav>\r\n\r\n    </div>\r\n    <div class=\"panel-body\" (keydown)=\"onEvent($event)\">\r\n        <ag-grid-ng2 #agGrid style=\"width:100%; height: 200px\" class=\"ag-dark\"\r\n                     [gridOptions]=\"gridOptions\"\r\n                     [columnDefs]=\"columnDefs\"\r\n                     [rowData]=\"sprData\"\r\n                     enableSorting\r\n                     rowSelection=\"single\"\r\n                     (cellValueChanged)=\"rowValueChanged($event)\"\r\n                     (cellFocused)=\"onCellFocused($event)\"\r\n                     (itemsAdded)=\"onitemsAdded($event)\"></ag-grid-ng2>\r\n\r\n    </div>\r\n</div>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(29);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".jmsprpanel {\r\n    background-color: #505058;\r\n    border-color: #d3d3da;\r\n    border: 0;\r\n    border-radius: 2px;\r\n}\r\n\r\n    .jmsprpanel .panel-heading {\r\n        background-color: #505058;\r\n        padding: 4px 4px 0px 4px;\r\n        border-bottom: 1px solid transparent;\r\n        border-top-left-radius: 2px;\r\n        border-top-right-radius: 2px;\r\n    }\r\n\r\n    .jmsprpanel .navbar {\r\n        margin-bottom: 0px;\r\n        border-radius: 0px;\r\n        min-height: 35px;\r\n    }\r\n\r\n    .jmsprpanel .container-fluid {\r\n        padding-top: 2px;\r\n        padding-right: 1px;\r\n        padding-left: 1px;\r\n    }\r\n\r\n        .navbar-right {\r\n            margin-right: 0px;\r\n        }\r\n\r\n        .jmsprpanel .navbar .navbar-btn {\r\n            margin: 0px;\r\n            padding: 4px 11px;\r\n            color: #c7c7c7;\r\n            background-color: inherit;\r\n            border: none;\r\n            border-radius: 2px;\r\n        }\r\n\r\n        .jmsprpanel .navbar .navbar-btn:hover  {\r\n            background-color: #333335;\r\n        }\r\n\r\n        .jmsprpanel .navbar .navbar-btn:active {\r\n            outline: none;\r\n            background-color: #007acc;\r\n            border-color: #66afe9;\r\n            outline: 0;\r\n            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\r\n            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\r\n        }\r\n\r\n        .jmsprpanel .navbar .navbar-btn:focus {\r\n            outline: none;\r\n        }\r\n\r\n            .jmsprpanel .navbar .navbar-btn > .glyphicon {\r\n                top: 3px;\r\n            }\r\n\r\n        .jmsprpanel .navbar-form {\r\n            padding: 0px;\r\n            margin: 0px 4px;\r\n        }\r\n\r\n        .jmsprpanel .form-control {\r\n            height: 28px;\r\n            padding: 0px 5px;\r\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n        }\r\n\r\n\r\n.jmsprpanel .panel-body {\r\n    padding: 2px 3px 0px 3px;\r\n}\r\n\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(3);
	var main_1 = __webpack_require__(31);
	var spr_common_1 = __webpack_require__(21);
	var jmSprModule = (function () {
	    function jmSprModule() {
	    }
	    return jmSprModule;
	}());
	jmSprModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            main_1.AgGridModule.withComponents([])
	        ],
	        declarations: [spr_common_1.sprCommon],
	        exports: [spr_common_1.sprCommon]
	    }),
	    __metadata("design:paramtypes", [])
	], jmSprModule);
	exports.jmSprModule = jmSprModule;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("ag-grid-ng2/main");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjg4Mzk4ZmVkOWVkNzNiODM4NjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkZmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbW1vbi5jb21wLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24udGl0bGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24udGl0bGUuY3NzPzkwMjEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tbW9uLnRpdGxlLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24ubmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tbW9uLm5hdmJhci5jc3M/YjQyYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24ubmF2YmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLmNvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL3Nwci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLmNvbW1vbi5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLmNvbW1vbi5jc3M/Mjc1YSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL3Nwci5jb21tb24uY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhZy1ncmlkLW5nMi9tYWluXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNB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QixtQ0FBbUMsYUFBYSx3REFBd0QsMENBQTBDLGFBQWEsd0RBQXdELDhCQUE4QiwwQ0FBMEMsc0NBQXNDLDJCQUEyQixzR0FBc0csOEZBQThGLGFBQWEsdURBQXVELDhCQUE4QixhQUFhLGtFQUFrRSw2QkFBNkIsaUJBQWlCLDBDQUEwQyw2QkFBNkIsZ0NBQWdDLGFBQWEsMkNBQTJDLDZCQUE2QixpQ0FBaUMsOEVBQThFLGFBQWEscUNBQXFDLGlDQUFpQyxLQUFLOztBQUVsbEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEscUNBQXlDO0FBR3pDLHNDQUFnRDtBQUVoRCw0Q0FBeUM7QUFTekMsS0FBYSxXQUFXO0tBQXhCO0tBQ0EsQ0FBQztLQUFELGtCQUFDO0FBQUQsRUFBQztBQURZLFlBQVc7S0FQdkIsZUFBUSxDQUFDO1NBQ04sT0FBTyxFQUFFO2FBQ0wsbUJBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1VBQ2xDO1NBQ0QsWUFBWSxFQUFFLENBQUUsc0JBQVMsQ0FBRTtTQUMzQixPQUFPLEVBQUUsQ0FBRSxzQkFBUyxDQUFFO01BQ3pCLENBQUM7O0lBQ1csV0FBVyxDQUN2QjtBQURZLG1DQUFXOzs7Ozs7O0FDZHhCLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjg4Mzk4ZmVkOWVkNzNiODM4NjQiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCwgdGl0bGVDb21wb25lbnQsIG5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcC9hcHAnO1xyXG5pbXBvcnQgeyBqbVNwck1vZHVsZSB9IGZyb20gJy4vY29tcC9zcHIvJ1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgRGV2RXh0cmVtZU1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7IFxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgdGl0bGVDb21wb25lbnQsIG5hdmJhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIGptU3ByTW9kdWxlXHJcbiAgICAgICAgLy9EZXZFeHRyZW1lTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbW1vbi5jb21wJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJqbUFsbFxcXCI+XFxyXFxuICAgIDxqbXRpdGxlPjwvam10aXRsZT5cXHJcXG4gICAgPGptbmF2YmFyPjwvam1uYXZiYXI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImptUGFnZVxcXCI+XFxyXFxuICAgICAgICA8am1zcHI+PC9qbXNwcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjam1BbGwge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjg0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jam1QYWdlIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xcclxcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTNweCk7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqbXRpdGxlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21tb24udGl0bGUuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tbW9uLnRpdGxlLmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgdGl0bGVDb21wb25lbnQge1xyXG4gICAgd2hhdERhdGVUaW1lID0gT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKS5tYXAoeCA9PiBuZXcgRGF0ZSgpKS5zaGFyZSgpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnam1uYXZiYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbW1vbi5uYXZiYXIuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tbW9uLm5hdmJhci5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIG5hdmJhckNvbXBvbmVudCB7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24uY29tcC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJkYXNoYm9hcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3VwZXJ2aXNvci1pbmZvXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImF2YXRhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYW1lXFxcIj7QptGL0LPQsNC90LrQvtCyINCV0LLQs9C10L3QuNC5PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXNoYm9hcmQtdGl0bGVcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRpdGxlXFxcIj5BTE0tQ0lTPC9zcGFuPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCIgaWQ9XFxcImN1cnJlbnREYXRlXFxcIiAodXBkYXRlVGltZSk9XFxcInVwZGF0ZU15VGltZSgpXFxcIj57eyB3aGF0RGF0ZVRpbWUgfCBhc3luYyB8IGRhdGU6J2RkLU1NLXl5eXknIH19Jm5ic3A7e3sgd2hhdERhdGVUaW1lIHwgYXN5bmMgfCBkYXRlOidzaG9ydFRpbWUnIH19PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvaGVhZGVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24udGl0bGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbW1vbi50aXRsZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tbW9uLnRpdGxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZGFzaGJvYXJkLWhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBwYWRkaW5nOiA2cHggMCAwIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxMzA4MGU7XFxyXFxuICAgIG1pbi13aWR0aDogOTAwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzN2FiNztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbiAgICAuZGFzaGJvYXJkLWhlYWRlciAuc3VwZXJ2aXNvci1pbmZvIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjVweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTdweDtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIC40NSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ1NlZ29lIFVJJywgJ0hlbHZldGljYSBOZXVlJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgJ0Ryb2lkIFNhbnMnLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4uc3VwZXJ2aXNvci1pbmZvIC5hdmF0YXIge1xcclxcbiAgICB3aWR0aDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBtYXJnaW46IDBweCAxMnB4IDAgMDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAzNnB4IDM2cHg7XFxyXFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4O1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1cGVydmlzb3ItaW5mbyAubmFtZSB7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZC1oZWFkZXIgLmRhc2hib2FyZC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgMjgycHg7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAyMHB4IDAgMjdweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMjApO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZC10aXRsZSAudGl0bGUge1xcclxcbiAgICBjb2xvcjogI2JlYmViZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ1NlZ29lIFVJJywgJ0hlbHZldGljYSBOZXVlJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgJ0Ryb2lkIFNhbnMnLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhc2hib2FyZC10aXRsZSAuZGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjQ1KTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ1NlZ29lIFVJJywgJ0hlbHZldGljYSBOZXVlJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgJ0Ryb2lkIFNhbnMnLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXAvYXBwL2FwcC5jb21tb24udGl0bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiam1uYXZiYXIgY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIG5hdmJhci1leDEtY29sbGFwc2VcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdlxcXCI+XFxyXFxuICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1oZWFkZXJcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1xcXCI+PC9zcGFuPtCQ0LTQvNC40L3QuNGB0YLRgNC40YDQvtCy0LDQvdC40LU8L2xpPlxcclxcbiAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXVzZXInPjwvc3Bhbj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCc+PC9zcGFuPtCh0L/RgNCw0LLQvtGH0L3QuNC60Lg8L2E+PC9saT5cXHJcXG4gICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWRpdmlkZXJcXFwiPjwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbW1vbi5uYXZiYXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbW1vbi5uYXZiYXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9hcHAvYXBwLmNvbW1vbi5uYXZiYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5qbW5hdmJhciB7XFxyXFxuICAgIG1hcmdpbjogNTJweCAwIDAgMDtcXHJcXG4gICAgd2lkdGg6IDI4MnB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2OTZweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ1NlZ29lIFVJJywgJ0hlbHZldGljYSBOZXVlJywgJ1RyZWJ1Y2hldCBNUycsIEhlbHZldGljYSwgJ0Ryb2lkIFNhbnMnLCBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzI1MjgzMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLm5hdiA+IHVsIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAwIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiA+IGxpIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjY2ZkMmRhO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgTGlnaHQnLCAnSGVsdmV0aWNhIE5ldWUgTGlnaHQnLCAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhIE5ldWUnLCAnVHJlYnVjaGV0IE1TJywgSGVsdmV0aWNhLCAnRHJvaWQgU2FucycsIFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAubmF2ID4gbGkgPiBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjY2ZkMmRhO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2ID4gbGkgPiBhOmhvdmVyLFxcclxcbiAgICAubmF2ID4gbGkgPiBhOmZvY3VzIHtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2ID4gbGkgLmdseXBoaWNvbiB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgPiAubmF2LWhlYWRlciB7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggMTBweCAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLm5hdiA+IC5uYXYtZGl2aWRlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIG1hcmdpbjogOXB4IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcXHJcXG4gICAgfVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wL2FwcC9hcHAuY29tbW9uLm5hdmJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vc3ByLmNvbW1vbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3ByLm1vZHVsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3ByLnNlcnZpY2UnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFnR3JpZE5nMiB9IGZyb20gJ2FnLWdyaWQtbmcyL21haW4nO1xyXG5pbXBvcnQgeyBHcmlkT3B0aW9ucywgUm93Tm9kZSwgR3JpZEFwaSB9IGZyb20gJ2FnLWdyaWQvbWFpbic7XG5cclxuaW1wb3J0IHsgalNwclNlcnZpY2UgfSBmcm9tICcuL3Nwci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqbXNwcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zcHIuY29tbW9uLmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3ByLmNvbW1vbi5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtqU3ByU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIHNwckNvbW1vbiB7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGdyaWRPcHRpb25zOiBHcmlkT3B0aW9ucztcbiAgICBwdWJsaWMgc3ByRGF0YTogam1zcHJbXTtcclxuICAgIHByaXZhdGUgY29sdW1uRGVmczogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqU3ByU3J2OiBqU3ByU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMgPSA8R3JpZE9wdGlvbnM+e307XG4gICAgICAgIHRoaXMuY3JlYXRlUm93RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uRGVmcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUm93RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmpTcHJTcnYuZ2V0U3ByKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKGRhdGEpID0+IHRoaXMuc3ByRGF0YSA9IGRhdGEsXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDb2x1bW5EZWZzKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1uRGVmcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyTmFtZTogJyMnLCBmaWVsZDogJ2lkJywgd2lkdGg6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICdEZXNjcicsIGZpZWxkOiAnZGVzY3InLCB3aWR0aDogMjAwLCBlZGl0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRXZlbnQoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcbiAgICAgICAgaWYgKCRldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgJGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5qU3ByQWRkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGpTcHJBZGQoKSB7ICAvL9CU0L7QsdCw0LLQu9C10L3QuNC1INC90L7QstC+0Lkg0YHRgtGA0L7QutC4INCyINGC0LDQsdC70LjRhtGDICjQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INGC0L7Qu9GM0LrQviDQvtC00L3QvtC5KVxyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMuYXBpLmFkZEl0ZW1zKFtuZXcgam1zcHIoKV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25pdGVtc0FkZGVkKCRldmVudCkgeyAvL9Cf0YDQuCDQtNC+0LHQsNCy0LvQtdC90LjQuCDQvdC+0LLQvtC5INGB0YLRgNC+0LrQuCwg0YHRgtCw0LLQuNC8INGE0L7QutGD0YEg0LIg0L/QvtC70LUgXCJkZXNjclwiINCyINGN0YLQvtC5INC90L7QstC+0Lkg0YHRgtGA0L7QutC1ICjQtNC70Y8g0YPQtNC+0LHRgdGC0LLQsClcclxuICAgICAgICAkZXZlbnQucm93Tm9kZXNbMF0uc2V0U2VsZWN0ZWQodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5ncmlkT3B0aW9ucy5hcGkuZW5zdXJlTm9kZVZpc2libGUoJGV2ZW50LnJvd05vZGVzWzBdKTtcclxuICAgICAgICB0aGlzLmdyaWRPcHRpb25zLmFwaS5zZXRGb2N1c2VkQ2VsbCgkZXZlbnQucm93Tm9kZXNbMF0ucm93SW5kZXgsIFwiZGVzY3JcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGpTcHJEZWwoKSB7XHJcbiAgICAgICAgLy8g0LTQu9GPINGD0LTQsNC70LXQvdC40Y9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJvd1ZhbHVlQ2hhbmdlZCgkZXZlbnQpIHtcbi8vICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xuICAgICAgICBpZiAoJGV2ZW50Lm9sZFZhbHVlICE9ICRldmVudC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5qU3ByU3J2LnB1dFNwcigkZXZlbnQuZGF0YSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQubm9kZS5kYXRhLmlkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm5vZGUuZGF0YS5pZCA9IGRhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoX25vZGU6IFJvd05vZGUsIF9hcGk6IEdyaWRBcGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcGkucmVmcmVzaFJvd3MoW19ub2RlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXBpLnNldFNvcnRNb2RlbChfYXBpLmdldFNvcnRNb2RlbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcGkuZW5zdXJlTm9kZVZpc2libGUoX25vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2FwaS5zZXRGb2N1c2VkQ2VsbChfbm9kZS5yb3dJbmRleCwgXCJkZXNjclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAoJGV2ZW50Lm5vZGUsIHRoaXMuZ3JpZE9wdGlvbnMuYXBpKSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkT3B0aW9ucy5hcGkucmVmcmVzaFJvd3MoWyRldmVudC5ub2RlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICAgICAgfVxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2VsbEZvY3VzZWQoJGV2ZW50KSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChfbm9kZTogUm93Tm9kZSkge1xyXG4gICAgICAgICAgICBpZiAoX25vZGUuaXNTZWxlY3RlZCgpICE9IHRydWUpIF9ub2RlLnNldFNlbGVjdGVkKHRydWUpO1xyXG4gICAgICAgIH0gKHRoaXMuZ3JpZE9wdGlvbnMuYXBpLmdldE1vZGVsKCkuZ2V0Um93KCRldmVudC5yb3dJbmRleCkpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgalNwclRlc3QoKSB7ICAgLy8g0J/RgNC+0YHRgtC+INC00LvRjyDQstGB0Y/QutC40YUg0L/RgNC+0LLQtdGA0L7QuiAuLi4g0L/QvtGC0L7QvCAtINGD0LTQsNC70LjRgtGMXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkT3B0aW9ucy5hcGkuZ2V0U2VsZWN0ZWROb2RlcygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24gKF9ub2RlOiBSb3dOb2RlLCBfYXBpOiBHcmlkQXBpKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS5kYXRhLmlkID0gMTA7XHJcbiAgICAgICAgICAgICAgICBfYXBpLnJlZnJlc2hSb3dzKFtfbm9kZV0pO1xyXG4gICAgICAgICAgICAgICAgX2FwaS5zZXRTb3J0TW9kZWwoX2FwaS5nZXRTb3J0TW9kZWwoKSk7XHJcbiAgICAgICAgICAgICAgICBfYXBpLmVuc3VyZU5vZGVWaXNpYmxlKF9ub2RlKTtcclxuICAgICAgICAgICAgICAgIF9hcGkuc2V0Rm9jdXNlZENlbGwoX25vZGUucm93SW5kZXgsIFwiZGVzY3JcIik7XHJcbiAgICAgICAgICAgIH0gKHRoaXMuZ3JpZE9wdGlvbnMuYXBpLmdldFNlbGVjdGVkTm9kZXMoKVswXSwgdGhpcy5ncmlkT3B0aW9ucy5hcGkpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2xldCBtZiA9IChfbm9kZTogUm93Tm9kZSwgX2FwaTogR3JpZEFwaSkgPT4ge1xyXG4gICAgICAgIC8vICAgIF9ub2RlLmRhdGEuaWQgPSAxMDtcclxuICAgICAgICAvLyAgICBfYXBpLnJlZnJlc2hSb3dzKFtfbm9kZV0pO1xyXG4gICAgICAgIC8vICAgIF9hcGkuc2V0U29ydE1vZGVsKF9hcGkuZ2V0U29ydE1vZGVsKCkpO1xyXG4gICAgICAgIC8vICAgIF9hcGkuZW5zdXJlTm9kZVZpc2libGUoX25vZGUpO1xyXG4gICAgICAgIC8vICAgIF9hcGkuc2V0Rm9jdXNlZENlbGwoX25vZGUucm93SW5kZXgsIFwiZGVzY3JcIik7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy8gbWYodGhpcy5ncmlkT3B0aW9ucy5hcGkuZ2V0U2VsZWN0ZWROb2RlcygpWzBdLCB0aGlzLmdyaWRPcHRpb25zLmFwaSk7XHJcblxyXG4gICAgICAgIC8vbGV0IF9ub2RlcyA9IHRoaXMuZ3JpZE9wdGlvbnMuYXBpLmdldFNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgICAvL2lmICggX25vZGVzLmxlbmd0aD0xICkge1xyXG4gICAgICAgIC8vICAgIF9ub2Rlc1swXS5kYXRhLmlkID0gMTA7XHJcbiAgICAgICAgLy8gICAgdGhpcy5ncmlkT3B0aW9ucy5hcGkucmVmcmVzaFJvd3MoX25vZGVzKTtcclxuICAgICAgICAvLyAgICB0aGlzLmdyaWRPcHRpb25zLmFwaS5zZXRTb3J0TW9kZWwodGhpcy5ncmlkT3B0aW9ucy5hcGkuZ2V0U29ydE1vZGVsKCkpO1xyXG4gICAgICAgIC8vICAgIHRoaXMuZ3JpZE9wdGlvbnMuYXBpLmVuc3VyZU5vZGVWaXNpYmxlKF9ub2Rlc1swXSk7XHJcbiAgICAgICAgLy8gICAgdGhpcy5ncmlkT3B0aW9ucy5hcGkuc2V0Rm9jdXNlZENlbGwoX25vZGVzWzBdLnJvd0luZGV4LCBcImRlc2NyXCIpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfSAgICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBqbXNwciB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgZGVzY3I6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVzY3IgPSBcIlwiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wL3Nwci9zcHIuY29tbW9uLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5pbXBvcnQgeyBqbXNwciB9IGZyb20gJy4vc3ByLmNvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBqU3ByU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGpVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAxL2FwaS9pdC9lcV92ZW5kb3JzJzsgIC8vIFVSTCB0byB3ZWIgQVBJXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRTcHIoKTogT2JzZXJ2YWJsZTxqbXNwcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5qVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXRTcHIoX2o6IGptc3ByKTogT2JzZXJ2YWJsZTxqbXNwcj4ge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIH0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShfaik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMualVybCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9sZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgLy9yZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgbGV0IGVyck1zZzogc3RyaW5nO1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImptc3BycGFuZWwgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgc3R5bGU9XFxcIndpZHRoOjQ0MHB4XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+XFxyXFxuXFxyXFxuPCEtLVxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiIGFyaWEtbGFiZWw9XFxcIi4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImpTcHJBZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwialNwckRlbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1taW51c1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXZpZGVyLXZlcnRpY2FsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwi0J/QvtC40YHQui4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImpTcHJEZWwoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLWNsb3NlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuLS0+XFxyXFxuXFxyXFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IG5hdmJhci1idG4gbmF2YmFyLWxlZnRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJqU3ByQWRkKClcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgbmF2YmFyLWJ0biBuYXZiYXItbGVmdFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbWludXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6Li4uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IG5hdmJhci1idG4gbmF2YmFyLXJpZ2h0XFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJqU3ByVGVzdCgpXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9uYXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiAoa2V5ZG93bik9XFxcIm9uRXZlbnQoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICA8YWctZ3JpZC1uZzIgI2FnR3JpZCBzdHlsZT1cXFwid2lkdGg6MTAwJTsgaGVpZ2h0OiAyMDBweFxcXCIgY2xhc3M9XFxcImFnLWRhcmtcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgW2dyaWRPcHRpb25zXT1cXFwiZ3JpZE9wdGlvbnNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbkRlZnNdPVxcXCJjb2x1bW5EZWZzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgIFtyb3dEYXRhXT1cXFwic3ByRGF0YVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICBlbmFibGVTb3J0aW5nXFxyXFxuICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPVxcXCJzaW5nbGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgKGNlbGxWYWx1ZUNoYW5nZWQpPVxcXCJyb3dWYWx1ZUNoYW5nZWQoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAoY2VsbEZvY3VzZWQpPVxcXCJvbkNlbGxGb2N1c2VkKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgKGl0ZW1zQWRkZWQpPVxcXCJvbml0ZW1zQWRkZWQoJGV2ZW50KVxcXCI+PC9hZy1ncmlkLW5nMj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcC9zcHIvc3ByLmNvbW1vbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcHIuY29tbW9uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL3Nwci5jb21tb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5qbXNwcnBhbmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1ODtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDNkM2RhO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5qbXNwcnBhbmVsIC5wYW5lbC1oZWFkaW5nIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDBweCA0cHg7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5qbXNwcnBhbmVsIC5uYXZiYXIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuam1zcHJwYW5lbCAuY29udGFpbmVyLWZsdWlkIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdmJhci1yaWdodCB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuam1zcHJwYW5lbCAubmF2YmFyIC5uYXZiYXItYnRuIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTFweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2M3YzdjNztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuam1zcHJwYW5lbCAubmF2YmFyIC5uYXZiYXItYnRuOmhvdmVyICB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzNTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5qbXNwcnBhbmVsIC5uYXZiYXIgLm5hdmJhci1idG46YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdhY2M7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIC42KTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIC42KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5qbXNwcnBhbmVsIC5uYXZiYXIgLm5hdmJhci1idG46Zm9jdXMge1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmptc3BycGFuZWwgLm5hdmJhciAubmF2YmFyLWJ0biA+IC5nbHlwaGljb24ge1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuam1zcHJwYW5lbCAubmF2YmFyLWZvcm0ge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDBweCA0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuam1zcHJwYW5lbCAuZm9ybS1jb250cm9sIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uam1zcHJwYW5lbCAucGFuZWwtYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAzcHggMHB4IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL3Nwci5jb21tb24uY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5cclxuaW1wb3J0IHsgQWdHcmlkTW9kdWxlIH0gZnJvbSBcImFnLWdyaWQtbmcyL21haW5cIjtcclxuXHJcbmltcG9ydCB7IHNwckNvbW1vbiB9IGZyb20gJy4vc3ByLmNvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEFnR3JpZE1vZHVsZS53aXRoQ29tcG9uZW50cyhbXSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgc3ByQ29tbW9uIF0sXHJcbiAgICBleHBvcnRzOiBbIHNwckNvbW1vbiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBqbVNwck1vZHVsZSB7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXAvc3ByL3Nwci5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhZy1ncmlkLW5nMi9tYWluXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYWctZ3JpZC1uZzIvbWFpblwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
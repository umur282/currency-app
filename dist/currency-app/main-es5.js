function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'currency-api';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info");
        }
      },
      directives: [_info_info_component__WEBPACK_IMPORTED_MODULE_1__["InfoComponent"]],
      styles: ["body[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  padding: 0;\n  margin: 0;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixTQUFTOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _currency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./currency.service */
    "./src/app/currency.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [_currency_service__WEBPACK_IMPORTED_MODULE_4__["CurrencyService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/currency.service.ts":
  /*!*************************************!*\
    !*** ./src/app/currency.service.ts ***!
    \*************************************/

  /*! exports provided: CurrencyService, CurrencyData */

  /***/
  function srcAppCurrencyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyService", function () {
      return CurrencyService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyData", function () {
      return CurrencyData;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_apiData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/apiData.json */
    "./src/assets/apiData.json");

    var _assets_apiData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/apiData.json */
    "./src/assets/apiData.json", 1); // import { environment } from '../environments/environment';
    // Dummy JSON file


    var CurrencyService = /*#__PURE__*/function () {
      function CurrencyService() {
        _classCallCheck(this, CurrencyService);

        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.arraySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currencyArray = [];
      } // Dummy API Request


      _createClass(CurrencyService, [{
        key: "fetchCurriencies",
        value: function fetchCurriencies() {
          var resp = JSON.parse(JSON.stringify(_assets_apiData_json__WEBPACK_IMPORTED_MODULE_2__));
          this.manipulateData(resp);
          this.dataSubject.next(this.currencyData);
          this.arraySubject.next(this.currencyArray);
        } // fetchCurriencies(): Promise<void> {
        //   return fetch(
        //     // fetching data from api
        //     'http://api.currencylayer.com/live' +
        //     '?access_key=' + environment.access_key +
        //     '&format=1'
        //   )
        //   .then(resp => resp.json())
        //   .then(resp => {
        //     this.manipulateData(resp);
        //     this.dataSubject.next(this.currencyData);
        //     this.arraySubject.next(this.currencyArray);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        // }

      }, {
        key: "manipulateData",
        value: function manipulateData(data) {
          // manipulation of currencyData.quotes
          // and creating currencyArray
          var newQuotes = Object();

          for (var _i = 0, _Object$entries = Object.entries(data.quotes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            var keyArray = key.split(''); // getting an array of key for string manipulation for qoutes

            var itemArray = keyArray.slice(3); // getting the last 3 items from that array for currencyArray

            keyArray = itemArray.concat(keyArray); // A,E,D + U,S,D,A,E,D=A,E,D,U,S,D,A,E,D

            var newKey = keyArray.slice(0, 6).join(''); // getting the first 6 items=AEDUSA for qoutes

            var newItem = itemArray.join(''); // AED for currencyArray

            newQuotes[newKey] = value; // creating a new qoutes to finish the manipulation

            this.currencyArray.push(newItem); // finishing the currency Array
          }

          data.quotes = newQuotes; // finishing the manipulation

          this.currencyData = data;
        }
      }, {
        key: "changeSource",
        value: function changeSource(newSourceCurrency) {
          var sourceRatio = this.currencyData.quotes[newSourceCurrency + this.currencyData.source]; // getting ratio of the selected currency from currencyData.qoutes

          var newQuotes = Object();
          this.currencyData.source = newSourceCurrency; // Updating the source in currencyData.source
          // Manipulation currencyData.quotes

          for (var _i2 = 0, _Object$entries2 = Object.entries(this.currencyData.quotes); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                value = _Object$entries2$_i[1];

            var keyArray = key.split(''); // getting array from keys name

            var newKey = keyArray.slice(0, 3).join('') + newSourceCurrency; // changing the key name

            newQuotes[newKey] = value * (1 / sourceRatio); // creating a new quotes object with new key name and converted value
          }

          this.currencyData.quotes = newQuotes; // finishing the manipulation
        }
      }, {
        key: "getCurrencyData",
        value: function getCurrencyData() {
          var cloneCurrencies = JSON.parse(JSON.stringify(this.currencyData));
          return cloneCurrencies;
        }
      }, {
        key: "getCurrencyArray",
        value: function getCurrencyArray() {
          return this.currencyArray.slice();
        }
      }]);

      return CurrencyService;
    }();

    CurrencyService.ɵfac = function CurrencyService_Factory(t) {
      return new (t || CurrencyService)();
    };

    CurrencyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrencyService,
      factory: CurrencyService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var CurrencyData = function CurrencyData() {
      _classCallCheck(this, CurrencyData);

      this.privacy = '';
      this.quotes = {
        key: 0
      };
      this.source = '';
      this.success = false;
      this.terms = '';
      this.timestamp = 0;
    };
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../currency.service */
    "./src/app/currency.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var currency_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", currency_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", currency_r4 === ctx_r0.selectedSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currency_r4, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "checked": a0
      };
    };

    function InfoComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var currency_r5 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", currency_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.targetArray.includes(currency_r5)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currency_r5, " ");
      }
    }

    function InfoComponent_li_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_li_30_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var target_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onRemoveTarget(target_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var target_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", target_r6 + " / " + ctx_r2.selectedSource + " = ", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r2.currencyData.quotes[target_r6 + ctx_r2.selectedSource], "1.0-3"), " ");
      }
    }

    function InfoComponent_label_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoComponent_label_37_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var source_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onSwitchSource(source_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var source_r9 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", source_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", source_r9 === ctx_r3.selectedSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", source_r9, " ");
      }
    }

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent(currencyService) {
        _classCallCheck(this, InfoComponent);

        this.currencyService = currencyService;
        this.currencyData = new _currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyData"]();
        this.selectedSource = 'TRY';
        this.targetArray = ['CNY', 'EUR', 'GBP', 'INR', 'JPY', 'KRW', 'RUB', 'TRY', 'USD'];
        this.sourceArray = [].concat(this.targetArray);
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataSub = this.currencyService.dataSubject.subscribe(function (data) {
            _this.currencyData = data;
          });
          this.arraySub = this.currencyService.arraySubject.subscribe(function (array) {
            _this.currencyArray = array;
          });
          this.onUpdateData();
        }
      }, {
        key: "onUpdateData",
        value: function onUpdateData() {
          this.currencyService.fetchCurriencies(); // dummy fetching
          // .then(() => {
          //   // Changing source currency
          //   this.currencyService.changeSource(this.selectedSource);
          // })
          // .catch(err => {
          //   console.log(err);
          // });

          this.currencyService.changeSource(this.selectedSource);
        }
      }, {
        key: "onChangeSource",
        value: function onChangeSource(event) {
          var newSource = event.target.value; // getting the name of selected currency

          this.selectedSource = newSource;
          this.currencyService.changeSource(newSource); // sending the name to service
        }
      }, {
        key: "onSwitchSource",
        value: function onSwitchSource(newSource) {
          this.selectedSource = newSource;
          this.currencyService.changeSource(newSource);
        }
      }, {
        key: "onToggleTarget",
        value: function onToggleTarget(event) {
          var newTarget = event.target.value; // getting the value from the html input

          if (this.currencyArray.includes(newTarget) && // validation
          this.targetArray.includes(newTarget)) {
            // target is already in the array
            this.targetArray.splice(this.targetArray.indexOf(newTarget), 1); // removing the selected target from the array
          } else if (this.currencyArray.includes(newTarget) && // validation
          !this.targetArray.includes(newTarget)) {
            // target is not in the array
            this.targetArray.push(newTarget); // pushing new target into array

            this.targetArray.sort(); // sorting the array
          }
        }
      }, {
        key: "onRemoveTarget",
        value: function onRemoveTarget(target) {
          if (this.currencyArray.includes(target) && this.targetArray.includes(target)) {
            this.targetArray.splice(this.targetArray.indexOf(target), 1);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dataSub.unsubscribe();
          this.arraySub.unsubscribe();
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]));
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 38,
      vars: 10,
      consts: [[1, "header"], [1, "container"], [1, "row", "text-center"], [1, "col-xs-4"], [1, "lead"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "content"], [1, "col-xs-3"], ["for", "sourceArray"], ["multiple", "", "name", "sourceArray", 1, "form-control", "source", 3, "change"], ["class", "text-center", 3, "value", "selected", 4, "ngFor", "ngForOf"], ["for", "targetArray"], ["multiple", "", "name", "targetArray", 1, "form-control", "target", 3, "change"], ["class", "text-center", 3, "value", "ngClass", 4, "ngFor", "ngForOf"], [1, "col-xs-6"], [1, "list-group"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "low-cont"], [1, "form-group"], ["class", "radio-inline", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "value", "selected"], [1, "text-center", 3, "value", "ngClass"], [1, "list-group-item", 3, "click"], [1, "radio-inline"], ["type", "radio", "name", "optradio", 3, "value", "checked", "change"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Currency API ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_button_click_11_listener() {
            return ctx.onUpdateData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Update! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Source currency: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoComponent_Template_select_change_19_listener($event) {
            return ctx.onChangeSource($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InfoComponent_option_20_Template, 2, 3, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Target currency: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoComponent_Template_select_change_24_listener($event) {
            return ctx.onToggleTarget($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InfoComponent_option_25_Template, 2, 5, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InfoComponent_li_30_Template, 3, 5, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Change simply source currency:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InfoComponent_label_37_Template, 3, 3, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 6, ctx.currencyData.timestamp * 1000, "d/M/yy, h:mm a", "+2330"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencyArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencyArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "1 " + ctx.selectedSource + " equals:", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.targetArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sourceArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: [".target[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #D8D558, #52a4ff);\n  background-color: #FFC894 !important; \n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked\n{\n  background: linear-gradient(to right, #D8D558, #52a4ff);\n  background-color: #FFC894 !important; \n  color: #0a0a0a!important;\n}\nselect[multiple][_ngcontent-%COMP%] {\n  height: 55vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #143914;\n}\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  color: #6EA56E;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #143914;\n  font-weight: bold;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #24355E;\n  padding-top: 20px;\n  padding-bottom: 40px;\n}\n.content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #D8D558;\n}\n.content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: rgb(168, 170, 194);\n  margin-left: 10px;\n  margin-right: 10px;\n  font-weight: 700;\n}\n.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #0a0a0a;\n  font-weight: 700;\n}\n\n.low-cont[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #143914;\n}\n.low-cont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .low-cont[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #6EA56E;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-weight: 700;\n}\n.low-cont[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover, .low-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0VBQ0UsdURBQXVEO0VBQ3ZELG9DQUFvQyxFQUFFLFdBQVc7QUFDbkQ7QUFFQTs7Ozs7RUFLRSx1REFBdUQ7RUFDdkQsb0NBQW9DLEVBQUUsV0FBVztFQUNqRCx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQSxZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLGVBQWU7QUFDakI7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU0VMRUNUKi9cbi50YXJnZXQgLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNEOEQ1NTgsICM1MmE0ZmYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDODk0ICFpbXBvcnRhbnQ7IC8qIGZvciBJRSAqL1xufVxuXG5zZWxlY3Qgb3B0aW9uOmhvdmVyLFxuc2VsZWN0IG9wdGlvbjpmb2N1cyxcbnNlbGVjdCBvcHRpb246YWN0aXZlLFxuc2VsZWN0IG9wdGlvbjpjaGVja2VkXG57XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Q4RDU1OCwgIzUyYTRmZik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkM4OTQgIWltcG9ydGFudDsgLyogZm9yIElFICovXG4gIGNvbG9yOiAjMGEwYTBhIWltcG9ydGFudDtcbn1cblxuc2VsZWN0W211bHRpcGxlXSB7XG4gIGhlaWdodDogNTV2aDtcbn1cblxuLyogSEVBREVSICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzkxNDtcbn1cblxuLmhlYWRlciBoMyxcbi5oZWFkZXIgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2RUE1NkU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMTQzOTE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogQ09OVEVOVCAqL1xuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzNTVFO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5jb250ZW50IHNlbGVjdDpob3Zlcixcbi5jb250ZW50IHVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHNlbGVjdCxcbi5jb250ZW50IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RDU1ODtcbn1cblxuLmNvbnRlbnQgbGFiZWwge1xuICBjb2xvcjogcmdiKDE2OCwgMTcwLCAxOTQpO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY29udGVudCBsaSxcbi5jb250ZW50IG9wdGlvbiB7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBMT1cgQ09OVEVOVCAqL1xuLmxvdy1jb250IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzkxNDtcbn1cblxuLmxvdy1jb250IGxhYmVsLFxuLmxvdy1jb250IGg0IHtcbiAgY29sb3I6ICM2RUE1NkU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb3ctY29udCBsYWJlbDpob3Zlcixcbi5sb3ctY29udCBpbnB1dDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [{
          type: _currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/apiData.json":
  /*!*********************************!*\
    !*** ./src/assets/apiData.json ***!
    \*********************************/

  /*! exports provided: success, terms, privacy, timestamp, source, quotes, default */

  /***/
  function srcAssetsApiDataJson(module) {
    module.exports = JSON.parse("{\"success\":true,\"terms\":\"https://currencylayer.com/terms\",\"privacy\":\"https://currencylayer.com/privacy\",\"timestamp\":1589474109,\"source\":\"USD\",\"quotes\":{\"USDAED\":3.67315,\"USDAFN\":76.650382,\"USDALL\":114.34957,\"USDAMD\":488.901289,\"USDANG\":1.796356,\"USDAOA\":551.430372,\"USDARS\":67.632502,\"USDAUD\":1.55716,\"USDAWG\":1.8,\"USDAZN\":1.700206,\"USDBAM\":1.813657,\"USDBBD\":2.020587,\"USDBDT\":85.00526,\"USDBGN\":1.811535,\"USDBHD\":0.377574,\"USDBIF\":1909,\"USDBMD\":1,\"USDBND\":1.425187,\"USDBOB\":6.900078,\"USDBRL\":5.918004,\"USDBSD\":1.000788,\"USDBTC\":0.000104,\"USDBTN\":75.524601,\"USDBWP\":12.248537,\"USDBYN\":2.455618,\"USDBYR\":19600,\"USDBZD\":2.017081,\"USDCAD\":1.408735,\"USDCDF\":1813.999875,\"USDCHF\":0.97417,\"USDCLF\":0.029812,\"USDCLP\":822.504849,\"USDCNY\":7.095803,\"USDCOP\":3949.11,\"USDCRC\":569.535498,\"USDCUC\":1,\"USDCUP\":26.5,\"USDCVE\":102.550352,\"USDCZK\":25.627022,\"USDDJF\":177.720037,\"USDDKK\":6.91501,\"USDDOP\":55.103454,\"USDDZD\":128.901946,\"USDEGP\":15.738897,\"USDERN\":14.999762,\"USDETB\":33.79891,\"USDEUR\":0.92724,\"USDFJD\":2.251978,\"USDFKP\":0.8205,\"USDGBP\":0.82067,\"USDGEL\":3.21501,\"USDGGP\":0.8205,\"USDGHS\":5.779794,\"USDGIP\":0.8205,\"USDGMD\":51.449946,\"USDGNF\":9449.999929,\"USDGTQ\":7.703963,\"USDGYD\":208.95813,\"USDHKD\":7.751465,\"USDHNL\":24.980107,\"USDHRK\":7.022903,\"USDHTG\":106.13049,\"USDHUF\":328.600975,\"USDIDR\":14944.55,\"USDILS\":3.54601,\"USDIMP\":0.8205,\"USDINR\":75.52005,\"USDIQD\":1190,\"USDIRR\":42105.000069,\"USDISK\":146.739913,\"USDJEP\":0.8205,\"USDJMD\":146.08336,\"USDJOD\":0.709002,\"USDJPY\":107.187499,\"USDKES\":106.74777,\"USDKGS\":76.079924,\"USDKHR\":4095.00018,\"USDKMF\":456.249928,\"USDKPW\":900.053684,\"USDKRW\":1231.029762,\"USDKWD\":0.309199,\"USDKYD\":0.833959,\"USDKZT\":423.64559,\"USDLAK\":9006.00029,\"USDLBP\":1514.000134,\"USDLKR\":187.88317,\"USDLRD\":198.37499,\"USDLSL\":18.397068,\"USDLTL\":2.952739,\"USDLVL\":0.60489,\"USDLYD\":1.415001,\"USDMAD\":9.865976,\"USDMDL\":17.812738,\"USDMGA\":3815.000158,\"USDMKD\":57.094275,\"USDMMK\":1412.00099,\"USDMNT\":2796.219443,\"USDMOP\":7.98889,\"USDMRO\":357.000014,\"USDMUR\":40.048959,\"USDMVR\":15.450138,\"USDMWK\":735.000283,\"USDMXN\":24.25098,\"USDMYR\":4.3405,\"USDMZN\":68.297117,\"USDNAD\":18.389794,\"USDNGN\":390.000347,\"USDNIO\":33.801184,\"USDNOK\":10.238925,\"USDNPR\":120.83903,\"USDNZD\":1.676305,\"USDOMR\":0.384986,\"USDPAB\":1.000788,\"USDPEN\":3.457051,\"USDPGK\":3.419688,\"USDPHP\":50.525499,\"USDPKR\":160.250009,\"USDPLN\":4.23428,\"USDPYG\":6565.864502,\"USDQAR\":3.640973,\"USDRON\":4.486103,\"USDRSD\":109.034976,\"USDRUB\":73.887298,\"USDRWF\":935,\"USDSAR\":3.757588,\"USDSBD\":8.371865,\"USDSCR\":14.393561,\"USDSDG\":55.32503,\"USDSEK\":9.855075,\"USDSGD\":1.426155,\"USDSHP\":0.8205,\"USDSLL\":9855.000312,\"USDSOS\":583.00022,\"USDSRD\":7.457977,\"USDSTD\":22050.693068,\"USDSVC\":8.756572,\"USDSYP\":513.094521,\"USDSZL\":18.530457,\"USDTHB\":32.079649,\"USDTJS\":10.266917,\"USDTMT\":3.5,\"USDTND\":2.90325,\"USDTOP\":2.319201,\"USDTRY\":6.947395,\"USDTTD\":6.746232,\"USDTWD\":29.937969,\"USDTZS\":2315.70265,\"USDUAH\":26.691888,\"USDUGX\":3789.560602,\"USDUSD\":1,\"USDUYU\":43.620987,\"USDUZS\":10107.501827,\"USDVEF\":9.987506,\"USDVND\":23335.5,\"USDVUV\":121.286279,\"USDWST\":2.758135,\"USDXAF\":608.28001,\"USDXAG\":0.063349,\"USDXAU\":0.000576,\"USDXCD\":2.70255,\"USDXDR\":0.734421,\"USDXOF\":606.999785,\"USDXPF\":110.874955,\"USDYER\":250.374974,\"USDZAR\":18.565435,\"USDZMK\":9001.202664,\"USDZMW\":18.287741,\"USDZWL\":322.000001}}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      access_key: '489ca62b04d3a324f9d97a415ec0e032'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/umur/Documents/Angular/currency-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
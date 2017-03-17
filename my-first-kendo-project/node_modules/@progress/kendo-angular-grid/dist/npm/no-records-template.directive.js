"use strict";
var core_1 = require('@angular/core');
/**
 * Represents the Kendo UI Grid no-records template.
 * It provides way to customize the appearance of the item shown when no data is present.
 *
 * To define the no-record template, nest a `<template>` tag with the `kendoGridNoRecordsTemplate` directive inside `<kendo-grid>`.
 * >Note that the template will be displayed in the non-locked portion of the Grid's content when locked columns are in use.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *       <kendo-grid [data]="data">
 *         <kendo-grid-column field="ProductID"></kendo-grid-column>
 *         <kendo-grid-column field="ProductName"></kendo-grid-column>
 *         <kendo-grid-column field="UnitPrice"></kendo-grid-column>
 *         <template kendoGridNoRecordsTemplate>
 *            There are not products. <a href="#" (click)="refresh()">Click here to refresh</a>.
 *         </template>
 *       </kendo-grid>
 *   `
 * })
 *
 * class AppComponent {
 *     public data = [];
 *     public refresh() {
 *       this.data = [{
 *            "ProductID": 1,
 *            "ProductName": "Chai",
 *            "UnitPrice": 18.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 1,
 *                "CategoryName": "Beverages",
 *                "Description": "Soft drinks, coffees, teas, beers, and ales"
 *            }
 *          }, {
 *            "ProductID": 2,
 *            "ProductName": "Chang",
 *            "UnitPrice": 19.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 1,
 *                "CategoryName": "Beverages",
 *                "Description": "Soft drinks, coffees, teas, beers, and ales"
 *            }
 *          }, {
 *            "ProductID": 3,
 *            "ProductName": "Aniseed Syrup",
 *            "UnitPrice": 10.0000,
 *            "Discontinued": false,
 *            "Category": {
 *                "CategoryID": 2,
 *                "CategoryName": "Condiments",
 *                "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
 *            }
 *        }];
 *
 *     }
 * }
 *
 * ```
 */
var NoRecordsTemplateDirective = (function () {
    function NoRecordsTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    NoRecordsTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoGridNoRecordsTemplate]'
                },] },
    ];
    /** @nocollapse */
    NoRecordsTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
    ]; };
    return NoRecordsTemplateDirective;
}());
exports.NoRecordsTemplateDirective = NoRecordsTemplateDirective;

import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the column header cell template of the Kendo UI Grid that helps to customize the table header cell for the column.
 *
 * To define a header template, nest a `<template>` tag with the `kendoGridHeaderTemplate` directive inside `<kendo-grid-column>`.
 * The template context is set to the current column and the following additional fields are passed:
 * - `column`&mdash;Defines an instance of the `ColumnComponent` option.
 * - `columnIndex`&mdash;Defines the current column index.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData">
 *             <kendo-grid-column field="ProductName">
 *                 <template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
 *                 </template>
 *             </kendo-grid-column>
 *              <kendo-grid-column field="UnitPrice">
 *                 <template kendoGridHeaderTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
 *                 </template>
 *             </kendo-grid-column>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public gridData = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000,
 *         "Discontinued": false
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000,
 *         "Discontinued": true
 *       }
 *     ];
 * }
 *
 * ```
 */
export var HeaderTemplateDirective = (function () {
    function HeaderTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    HeaderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridHeaderTemplate]'
                },] },
    ];
    /** @nocollapse */
    HeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return HeaderTemplateDirective;
}());

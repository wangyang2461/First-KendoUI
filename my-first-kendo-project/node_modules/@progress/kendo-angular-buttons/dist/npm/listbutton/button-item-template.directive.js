"use strict";
/* tslint:disable:directive-selector-name */
var core_1 = require('@angular/core');
/**
 * Used for rendering the list item content.
 *
 * To define the item template, nest a `<template>` tag with the `kendo<ComponentName>ItemTemplate` directive inside the component tag.
 *
 * Use:
 * - The `kendoDropDownButtonItemTemplate` directive for the DropDownButton.
 * - The `kendoSplitButtonItemTemplate` directive for the SplitButton.
 *
 * The template context is set to the current component. To get a reference to the current data item, use the `let-dataItem` directive.
 *
 * @example
 * ```ts
 * @@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="listItems">
 *    <template kendoSplitButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </template>
 *  </kendo-splitbutton>
 *  <kendo-dropdownbutton [data]="listItems">
 *    <template kendoDropDownButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </template>
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<any> = [{
 *      text: 'item1',
 *      icon: 'refresh',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }, {
 *      text: 'item2',
 *      icon: 'refresh',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }]
 * }
 * ```
 *
 * For more examples, refer to [Templates]({% slug overview_ddl_kendouiforangular %}#templates).
 */
var ButtonItemTemplateDirective = (function () {
    function ButtonItemTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    ButtonItemTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]'
                },] },
    ];
    /** @nocollapse */
    ButtonItemTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return ButtonItemTemplateDirective;
}());
exports.ButtonItemTemplateDirective = ButtonItemTemplateDirective;

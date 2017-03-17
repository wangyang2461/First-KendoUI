var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { forwardRef, Component, Input, ContentChild, SkipSelf, Host, Optional } from '@angular/core';
import { CellTemplateDirective } from './cell-template.directive';
import { GroupHeaderTemplateDirective } from './grouping/group-header-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { GroupFooterTemplateDirective } from './grouping/group-footer-template.directive';
import { ColumnBase } from './column-base';
import { isPresent } from './utils';
/**
 * @hidden
 */
export function isColumnComponent(column) {
    return isPresent(column.field);
}
/**
 * Represents the columns of the Kendo UI Grid component for Angular.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-grid [data]="gridData">
 *          <kendo-grid-column field="ProductID" title="Product ID" width="120">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="ProductName" title="Product Name">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
 *          </kendo-grid-column>
 *          <kendo-grid-column field="Discontinued" width="120">
 *              <template kendoGridCellTemplate let-dataItem>
 *                  <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
 *              </template>
 *          </kendo-grid-column>
 *        </kendo-grid>
 *    `
 * })
 *
 * class AppComponent {
 *    private gridData: any[];
 *
 *    constructor() {
 *        this.gridData = products;
 *    }
 * }
 *
 * const products = [{
 *    "ProductID": 1,
 *    "ProductName": "Chai",
 *    "UnitPrice": 18.0000,
 *    "Discontinued": true
 *  }, {
 *    "ProductID": 2,
 *    "ProductName": "Chang",
 *    "UnitPrice": 19.0000,
 *    "Discontinued": false
 *  }
 * ];
 *
 * ```
 */
export var ColumnComponent = (function (_super) {
    __extends(ColumnComponent, _super);
    function ColumnComponent(parent) {
        _super.call(this, parent);
        /**
         * Allows the column headers to be clicked and the `sortChange` event emitted.
         * You have to handle the `sortChange` event yourself and sort the data.
         */
        this.sortable = true;
        /**
         * Defines the editor type. Used when the column enters the edit mode. The default editor type is `text`.
         *
         * @example
         * ```ts-no-run
         * <kendo-grid>
         *    <kendo-grid-column field="UnitPrice" [editor]="'numeric'">
         *    </kendo-grid-column>
         * </kendo-grid>
         * ```
         */
        this.editor = 'text';
        /**
         * Defines whether the column is editable. The default value is `true`.
         *
         * @example
         * ```ts-no-run
         * <kendo-grid>
         *    <kendo-grid-column field="UnitPrice" [editable]="false">
         *    </kendo-grid-column>
         * </kendo-grid>
         * ```
         */
        this.editable = true;
    }
    Object.defineProperty(ColumnComponent.prototype, "templateRef", {
        get: function () {
            return this.template ? this.template.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnComponent.prototype, "groupHeaderTemplateRef", {
        get: function () {
            return this.groupHeaderTemplate ? this.groupHeaderTemplate.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnComponent.prototype, "groupFooterTemplateRef", {
        get: function () {
            return this.groupFooterTemplate ? this.groupFooterTemplate.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnComponent.prototype, "editTemplateRef", {
        get: function () {
            return this.editTemplate ? this.editTemplate.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    ColumnComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: ColumnBase,
                            useExisting: forwardRef(function () { return ColumnComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-grid-column',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnComponent.ctorParameters = function () { return [
        { type: ColumnBase, decorators: [{ type: SkipSelf }, { type: Host }, { type: Optional },] },
    ]; };
    ColumnComponent.propDecorators = {
        'field': [{ type: Input },],
        'format': [{ type: Input },],
        'sortable': [{ type: Input },],
        'editor': [{ type: Input },],
        'editable': [{ type: Input },],
        'template': [{ type: ContentChild, args: [CellTemplateDirective,] },],
        'groupHeaderTemplate': [{ type: ContentChild, args: [GroupHeaderTemplateDirective,] },],
        'groupFooterTemplate': [{ type: ContentChild, args: [GroupFooterTemplateDirective,] },],
        'editTemplate': [{ type: ContentChild, args: [EditTemplateDirective,] },],
    };
    return ColumnComponent;
}(ColumnBase));

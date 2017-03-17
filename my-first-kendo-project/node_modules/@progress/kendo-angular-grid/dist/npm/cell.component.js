"use strict";
var core_1 = require('@angular/core');
var edit_service_1 = require('./edit.service');
var command_column_component_1 = require('./command-column.component');
var utils_1 = require('./utils');
var cell_context_1 = require('./cell-context');
/**
 * @hidden
 */
var CellComponent = (function () {
    function CellComponent(editService, cellContext) {
        this.editService = editService;
        this.cellContext = cellContext;
        this.isNew = false;
    }
    Object.defineProperty(CellComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (index) {
            this._rowIndex = index;
            if (this.cellContext) {
                this.cellContext.rowIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "isEdited", {
        get: function () {
            if (!this.isColumnEditable) {
                return false;
            }
            var editContext = this.editService.context(this.rowIndex);
            return this.isFieldEditable(editContext, this.column);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "formGroup", {
        get: function () {
            return this.editService.context(this.rowIndex).group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellComponent.prototype, "isColumnEditable", {
        get: function () {
            if (!this.column || this.isCommand(this.column)) {
                return false;
            }
            return this.column.editable !== false;
        },
        enumerable: true,
        configurable: true
    });
    CellComponent.prototype.isCommand = function (column) {
        return column instanceof command_column_component_1.CommandColumnComponent;
    };
    CellComponent.prototype.isFieldEditable = function (editContext, column) {
        if (!utils_1.isPresent(editContext)) {
            return false;
        }
        if (utils_1.isPresent(column.editTemplate)) {
            return true;
        }
        return utils_1.isPresent(editContext.group) && utils_1.isPresent(editContext.group.get(column.field));
    };
    CellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[kendoGridCell]',
                    template: "\n        <ng-container [ngSwitch]=\"isEdited\">\n            <ng-content *ngSwitchCase=\"false\"></ng-content>\n            <ng-container *ngSwitchCase=\"true\">\n                <template\n                    *ngIf=\"column.editTemplateRef\"\n                    [ngTemplateOutlet]=\"column.editTemplateRef\"\n                    [ngOutletContext]=\"{\n                        $implicit: formGroup,\n                        isNew: isNew,\n                        column: column,\n                        dataItem: dataItem,\n                        formGroup: formGroup,\n                        rowIndex: rowIndex\n                    }\">\n                </template>\n                <ng-container [ngSwitch]=\"column.editor\" *ngIf=\"!column.editTemplate\">\n                    <input\n                        *ngSwitchCase=\"'numeric'\"\n                        type=\"number\"\n                        class=\"k-textbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n\n                    <input\n                        *ngSwitchCase=\"'date'\"\n                        type=\"date\"\n                        class=\"k-textbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n\n                    <input\n                        *ngSwitchCase=\"'boolean'\"\n                        type=\"checkbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n\n                    <input\n                        *ngSwitchDefault\n                        type=\"text\"\n                        class=\"k-textbox\"\n                        [formControl]=\"formGroup.get(column.field)\"\n                    />\n                </ng-container>\n            </ng-container>\n        </ng-container>\n    "
                },] },
    ];
    /** @nocollapse */
    CellComponent.ctorParameters = function () { return [
        { type: edit_service_1.EditService, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [cell_context_1.CELL_CONTEXT,] },] },
    ]; };
    CellComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'isNew': [{ type: core_1.Input },],
        'rowIndex': [{ type: core_1.Input },],
        'dataItem': [{ type: core_1.Input },],
    };
    return CellComponent;
}());
exports.CellComponent = CellComponent;

import { Component, Input } from '@angular/core';
import { DetailsService } from './details.service';
import { GroupsService } from './grouping/groups.service';
import { ChangeNotificationService } from './change-notification.service';
import { isChanged, isPresent } from './utils';
import { EditService } from './edit.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export var TableBodyComponent = (function () {
    function TableBodyComponent(detailsService, groupsService, changeNotification, editService, localization) {
        this.detailsService = detailsService;
        this.groupsService = groupsService;
        this.changeNotification = changeNotification;
        this.editService = editService;
        this.localization = localization;
        this.columns = [];
        this.groups = [];
        this.skip = 0;
        this.noRecordsText = this.localization.get('noRecords');
        this.skipGroupDecoration = false;
        this.showGroupFooters = false;
    }
    Object.defineProperty(TableBodyComponent.prototype, "newDataItem", {
        get: function () {
            var _a = this.editService.context().group, group = _a === void 0 ? {} : _a;
            return group.value;
        },
        enumerable: true,
        configurable: true
    });
    TableBodyComponent.prototype.toggleRow = function (index, dataItem) {
        this.detailsService.toggleRow(index, dataItem);
        return false;
    };
    TableBodyComponent.prototype.trackByFn = function (_, item) {
        return item.data ? item.data : item;
    };
    TableBodyComponent.prototype.isExpanded = function (index) {
        return this.detailsService.isExpanded(index);
    };
    TableBodyComponent.prototype.detailButtonStyles = function (index) {
        var expanded = this.isExpanded(index);
        return { 'k-minus': expanded, 'k-plus': !expanded };
    };
    TableBodyComponent.prototype.isGroup = function (item) {
        return item.type === 'group';
    };
    TableBodyComponent.prototype.isDataItem = function (item) {
        return !this.isGroup(item) && !this.isFooter(item);
    };
    TableBodyComponent.prototype.isFooter = function (item) {
        return item.type === 'footer';
    };
    TableBodyComponent.prototype.isInExpandedGroup = function (item) {
        return this.groupsService.isInExpandedGroup(item.groupIndex, false);
    };
    TableBodyComponent.prototype.isParentGroupExpanded = function (item) {
        return this.groupsService.isInExpandedGroup(item.index || item.groupIndex);
    };
    TableBodyComponent.prototype.isOdd = function (item) {
        return item.index % 2 === 0;
    };
    TableBodyComponent.prototype.ngOnChanges = function (changes) {
        if (isChanged("columns", changes, false)) {
            this.changeNotification.notify();
        }
    };
    Object.defineProperty(TableBodyComponent.prototype, "colSpan", {
        get: function () {
            return this.columns.length + this.groups.length + (isPresent(this.detailTemplate) ? 1 : 0);
        },
        enumerable: true,
        configurable: true
    });
    TableBodyComponent.prototype.isBoundColumn = function (column) {
        return column.field && !column.templateRef;
    };
    TableBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kendoGridTableBody]',
                    template: "\n    <template [ngIf]=\"editService.hasNewItem\">\n        <tr class=\"k-grid-add-row k-grid-edit-row\">\n            <template [ngIf]=\"!skipGroupDecoration\">\n                <td [class.k-group-cell]=\"true\" *ngFor=\"let g of groups\"></td>\n            </template>\n            <td [class.k-hierarchy-cell]=\"true\"\n                *ngIf=\"detailTemplate?.templateRef\">\n            </td>\n            <td\n                kendoGridCell\n                [rowIndex]=\"-1\"\n                [isNew]=\"true\"\n                [column]=\"column\"\n                [dataItem]=\"newDataItem\"\n                [ngClass]=\"column.cssClass\"\n                [ngStyle]=\"column.style\"\n                *ngFor=\"let column of columns; let columnIndex = index\">\n                <template\n                    [templateContext]=\"{\n                        templateRef: column.templateRef,\n                        dataItem: newDataItem,\n                        column: column,\n                        columnIndex: columnIndex,\n                        rowIndex: -1,\n                        isNew: true,\n                        $implicit: item\n                        }\">\n                </template>\n                <template [ngIf]=\"isBoundColumn(column)\">{{newDataItem | valueOf: column.field: column.format}}</template>\n            </td>\n        </tr>\n    </template>\n    <tr *ngIf=\"data?.length === 0 || data == null\" class=\"k-grid-norecords\">\n        <td [attr.colspan]=\"colSpan\">\n            <template\n                [ngIf]=\"noRecordsTemplate?.templateRef\"\n                [templateContext]=\"{\n                    templateRef: noRecordsTemplate?.templateRef\n                 }\">\n            </template>\n            <ng-container *ngIf=\"!noRecordsTemplate?.templateRef\">\n                {{noRecordsText}}\n            </ng-container>\n        </td>\n    </tr>\n    <template ngFor\n        [ngForOf]=\"data\"\n        [ngForTrackBy]=\"trackByFn\"\n        let-item>\n        <tr *ngIf=\"isGroup(item) && isParentGroupExpanded(item)\"\n            kendoGridGroupHeader\n            [columns]=\"columns\"\n            [groups]=\"groups\"\n            [item]=\"item\"\n            [skipGroupDecoration]=\"skipGroupDecoration\">\n        </tr>\n        <tr\n            *ngIf=\"isDataItem(item) && isInExpandedGroup(item)\"\n            [class.k-alt]=\"isOdd(item)\"\n            [class.k-master-row]=\"detailTemplate?.templateRef\"\n            [class.k-grid-edit-row]=\"editService.isEdited(item.index)\"\n            [kendoGridSelectable]=\"selectable\"\n            [index]=\"item.index\">\n            <template [ngIf]=\"!skipGroupDecoration\">\n                <td [class.k-group-cell]=\"true\" *ngFor=\"let g of groups\"></td>\n            </template>\n            <td [class.k-hierarchy-cell]=\"true\"\n                *ngIf=\"detailTemplate?.templateRef\">\n                <a class=\"k-icon\"\n                    *ngIf=\"detailTemplate.showIf(item.data, item.index)\"\n                    [ngClass]=\"detailButtonStyles(item.index)\"\n                    href=\"#\" tabindex=\"-1\" (click)=\"toggleRow(item.index, item.data)\"></a>\n            </td>\n            <td\n                kendoGridCell\n                [rowIndex]=\"item.index\"\n                [column]=\"column\"\n                [dataItem]=\"item.data\"\n                [ngClass]=\"column.cssClass\"\n                [ngStyle]=\"column.style\"\n                *ngFor=\"let column of columns; let columnIndex = index\">\n                <template\n                    [templateContext]=\"{\n                        templateRef: column.templateRef,\n                        dataItem: item.data,\n                        column: column,\n                        columnIndex: columnIndex,\n                        rowIndex: item.index,\n                        $implicit: item.data\n                        }\">\n                </template>\n                <template [ngIf]=\"isBoundColumn(column)\">{{item.data | valueOf: column.field: column.format}}</template>\n            </td>\n        </tr>\n        <tr *ngIf=\"isDataItem(item) && detailTemplate?.templateRef &&\n            detailTemplate.showIf(item.data, item.index) && isExpanded(item.index)\"\n            [class.k-detail-row]=\"true\"\n            [class.k-alt]=\"isOdd(item)\">\n            <td [class.k-group-cell]=\"true\" *ngFor=\"let g of groups\"></td>\n            <td [class.k-hierarchy-cell]=\"true\"></td>\n            <td [class.k-detail-cell]=\"true\"\n                [attr.colspan]=\"columns.length\">\n                <template\n                    [templateContext]=\"{\n                        templateRef: detailTemplate?.templateRef,\n                        dataItem: item.data,\n                        rowIndex: item.index,\n                        $implicit: item.data\n                        }\">\n                </template>\n            </td>\n        </tr>\n        <tr *ngIf=\"isFooter(item) && (isInExpandedGroup(item) || (showGroupFooters && isParentGroupExpanded(item)))\"\n            [class.k-group-footer]=\"true\">\n            <template [ngIf]=\"!skipGroupDecoration\">\n                <td [class.k-group-cell]=\"true\" *ngFor=\"let g of groups\"></td>\n            </template>\n            <td [class.k-hierarchy-cell]=\"true\"\n                *ngIf=\"detailTemplate?.templateRef\">\n            </td>\n            <td\n                *ngFor=\"let column of columns; let columnIndex = index\">\n                <template\n                    [templateContext]=\"{\n                        templateRef: column.groupFooterTemplateRef,\n                        group: item.data,\n                        field: column.field,\n                        column: column,\n                        $implicit: item.data?.aggregates\n                        }\">\n                </template>\n           </td>\n        </tr>\n    </template>\n    "
                },] },
    ];
    /** @nocollapse */
    TableBodyComponent.ctorParameters = function () { return [
        { type: DetailsService, },
        { type: GroupsService, },
        { type: ChangeNotificationService, },
        { type: EditService, },
        { type: LocalizationService, },
    ]; };
    TableBodyComponent.propDecorators = {
        'columns': [{ type: Input },],
        'groups': [{ type: Input },],
        'detailTemplate': [{ type: Input },],
        'noRecordsTemplate': [{ type: Input },],
        'data': [{ type: Input },],
        'skip': [{ type: Input },],
        'selectable': [{ type: Input },],
        'noRecordsText': [{ type: Input },],
        'skipGroupDecoration': [{ type: Input },],
        'showGroupFooters': [{ type: Input },],
    };
    return TableBodyComponent;
}());

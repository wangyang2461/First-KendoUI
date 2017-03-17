import { QueryList } from '@angular/core';
import { isColumnGroupComponent } from './column-group.component';
/**
 * @hidden
 */
export var ColumnsContainer = (function () {
    function ColumnsContainer(columns) {
        this.columns = columns;
        this.leafColumns = new QueryList();
        this.lockedColumns = new QueryList();
        this.nonLockedColumns = new QueryList();
        this.lockedLeafColumns = new QueryList();
        this.nonLockedLeafColumns = new QueryList();
        this.totalLevels = 0;
    }
    ColumnsContainer.prototype.refresh = function () {
        var _this = this;
        this.totalLevels = 0;
        var leafColumns = new Array();
        var lockedLeafColumns = new Array();
        var nonLockedLeafColumns = new Array();
        var lockedColumns = new Array();
        var nonLockedColumns = new Array();
        this.columns().forEach(function (column) {
            var containerLeafColumns = column.isLocked === true ? lockedLeafColumns : nonLockedLeafColumns;
            var containerColumns = column.isLocked === true ? lockedColumns : nonLockedColumns;
            if (!isColumnGroupComponent(column)) {
                containerLeafColumns.push(column);
                leafColumns.push(column);
            }
            containerColumns.push(column);
            _this.totalLevels = column.level > _this.totalLevels ? column.level : _this.totalLevels;
        });
        this.leafColumns.reset(leafColumns);
        this.lockedLeafColumns.reset(lockedLeafColumns);
        this.nonLockedLeafColumns.reset(nonLockedLeafColumns);
        this.lockedColumns.reset(lockedColumns);
        this.nonLockedColumns.reset(nonLockedColumns);
    };
    return ColumnsContainer;
}());

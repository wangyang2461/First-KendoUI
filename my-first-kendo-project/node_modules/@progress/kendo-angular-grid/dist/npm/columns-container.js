"use strict";
var core_1 = require('@angular/core');
var column_group_component_1 = require('./column-group.component');
/**
 * @hidden
 */
var ColumnsContainer = (function () {
    function ColumnsContainer(columns) {
        this.columns = columns;
        this.leafColumns = new core_1.QueryList();
        this.lockedColumns = new core_1.QueryList();
        this.nonLockedColumns = new core_1.QueryList();
        this.lockedLeafColumns = new core_1.QueryList();
        this.nonLockedLeafColumns = new core_1.QueryList();
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
            if (!column_group_component_1.isColumnGroupComponent(column)) {
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
exports.ColumnsContainer = ColumnsContainer;

import { QueryList } from '@angular/core';
import { ColumnBase } from './column-base';
/**
 * @hidden
 */
export declare class ColumnsContainer {
    private columns;
    leafColumns: QueryList<ColumnBase>;
    lockedColumns: QueryList<ColumnBase>;
    nonLockedColumns: QueryList<ColumnBase>;
    lockedLeafColumns: QueryList<ColumnBase>;
    nonLockedLeafColumns: QueryList<ColumnBase>;
    totalLevels: number;
    constructor(columns: Function);
    refresh(): void;
}

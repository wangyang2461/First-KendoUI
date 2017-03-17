import { EventEmitter } from '@angular/core';
import { PagerSettings } from './pager-settings';
import { PageChangeEvent } from './change-event-args.interface';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export declare class PagerComponent {
    private localization;
    total: number;
    skip: number;
    pageSize: number;
    options: PagerSettings | boolean;
    pageChange: EventEmitter<PageChangeEvent>;
    readonly pagerWrapClass: boolean;
    readonly gridPagerClass: boolean;
    readonly widgetClass: boolean;
    settings: PagerSettings;
    readonly prevButtonsDisabled: boolean;
    readonly nextButtonsDisabled: boolean;
    readonly showInitialPageSize: boolean;
    pageSizeChange(value: any): void;
    changePage(page: number): boolean;
    readonly currentPage: number;
    readonly totalPages: number;
    onInputChange(value: string): void;
    readonly buttons: number[];
    readonly maxItems: number;
    readonly currentPageText: number;
    private readonly end;
    private readonly start;
    constructor(localization: LocalizationService);
    textFor(key: string): string;
}

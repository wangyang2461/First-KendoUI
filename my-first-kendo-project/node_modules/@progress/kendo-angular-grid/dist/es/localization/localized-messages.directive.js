var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './messages';
/**
 * @hidden
 */
export var LocalizedMessagesDirective = (function (_super) {
    __extends(LocalizedMessagesDirective, _super);
    function LocalizedMessagesDirective(service) {
        _super.call(this);
        this.service = service;
    }
    LocalizedMessagesDirective.decorators = [
        { type: Directive, args: [{
                    providers: [
                        {
                            provide: Messages,
                            useExisting: forwardRef(function () { return LocalizedMessagesDirective; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: '[kendoGridLocalizedMessages]'
                },] },
    ];
    /** @nocollapse */
    LocalizedMessagesDirective.ctorParameters = function () { return [
        { type: LocalizationService, },
    ]; };
    return LocalizedMessagesDirective;
}(Messages));

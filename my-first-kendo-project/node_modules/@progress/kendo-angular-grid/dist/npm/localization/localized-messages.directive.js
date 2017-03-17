"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var messages_1 = require('./messages');
/**
 * @hidden
 */
var LocalizedMessagesDirective = (function (_super) {
    __extends(LocalizedMessagesDirective, _super);
    function LocalizedMessagesDirective(service) {
        _super.call(this);
        this.service = service;
    }
    LocalizedMessagesDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [
                        {
                            provide: messages_1.Messages,
                            useExisting: core_1.forwardRef(function () { return LocalizedMessagesDirective; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: '[kendoGridLocalizedMessages]'
                },] },
    ];
    /** @nocollapse */
    LocalizedMessagesDirective.ctorParameters = function () { return [
        { type: kendo_angular_l10n_1.LocalizationService, },
    ]; };
    return LocalizedMessagesDirective;
}(messages_1.Messages));
exports.LocalizedMessagesDirective = LocalizedMessagesDirective;

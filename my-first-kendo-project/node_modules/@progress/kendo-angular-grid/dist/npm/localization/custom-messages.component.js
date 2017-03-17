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
 * Custom component messages override default component messages.
 */
var CustomMessagesComponent = (function (_super) {
    __extends(CustomMessagesComponent, _super);
    function CustomMessagesComponent(service) {
        _super.call(this);
        this.service = service;
    }
    Object.defineProperty(CustomMessagesComponent.prototype, "override", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CustomMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: messages_1.Messages,
                            useExisting: core_1.forwardRef(function () { return CustomMessagesComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-grid-messages',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    CustomMessagesComponent.ctorParameters = function () { return [
        { type: kendo_angular_l10n_1.LocalizationService, },
    ]; };
    return CustomMessagesComponent;
}(messages_1.Messages));
exports.CustomMessagesComponent = CustomMessagesComponent;

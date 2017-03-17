"use strict";
require('rxjs/add/operator/map');
require('rxjs/add/operator/take');
require('rxjs/add/observable/merge');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var core_1 = require('@angular/core');
var dialog_component_1 = require('./dialog.component');
var dialog_container_service_1 = require('./dialog-container.service');
var dialog_settings_1 = require('./dialog-settings');
/**
 * Service for opening Dialog windows.
 *
 * To register a provider for the service,
 * use the [`DialogModule.forRoot`]({% slug api_dialog_dialogmodule_kendouiforangular %}#toc-forroot) method.
 */
var DialogService = (function () {
    function DialogService(resolver, containerService) {
        this.resolver = resolver;
        this.containerService = containerService;
    }
    /**
     * Opens a Dialog window.
     *
     * Requires an element in the application that uses the `kendoDialogContainer` directive.
     * Created Dialogs will be mounted in the DOM directly after this element.
     *
     * @param {DialogAction} options - The options that define the Dialog.
     * @returns {DialogRef} - A reference to the Dialog object, as well as convenience properties.
     *
     * @example
     *
     * ```ts-no-run
     * @@Component({
     *   selector: 'my-app',
     *   template: `
     *     <button kendoButton (click)="open()">Harmless button</button>
     *     <div kendoDialogContainer></div>
     *   `
     * })
     * export class AppComponent {
     *     constructor( private dialogService: DialogService ) {}
     *
     *     public open() {
     *         var dialog = this.dialogService.open({
     *           title: "Please confirm",
     *           content: "Are you sure?",
     *           actions: [
     *             { text: "No" },
     *             { text: "Yes", primary: true }
     *           ]
     *         });
     *
     *         dialog.result.subscribe((result) => {
     *           if (result instanceof DialogCloseResult) {
     *             console.log("close");
     *           } else {
     *             console.log("action", result);
     *           }
     *         });
     *     }
     * }
     * ```
     *
     */
    DialogService.prototype.open = function (options) {
        this.containerService.validate();
        var factory = this.resolver.resolveComponentFactory(dialog_component_1.DialogComponent);
        var container = this.containerService.container;
        var content = this.contentFrom(options.content);
        var dialog = container.createComponent(factory, 0, undefined, content.nodes);
        this.applyOptions(dialog.instance, options);
        var apiClose = new Subject_1.Subject();
        var close = function (e) {
            apiClose.next(e || new dialog_settings_1.DialogCloseResult());
            dialog.destroy();
        };
        var result = Observable_1.Observable.merge(apiClose, dialog.instance.close, dialog.instance.action).take(1);
        result.subscribe(close);
        return {
            result: result,
            dialog: dialog,
            content: content.componentRef || null,
            close: close
        };
    };
    DialogService.prototype.applyOptions = function (instance, options) {
        instance.title = options.title;
        instance.actions = options.actions;
        if (options.content instanceof core_1.TemplateRef) {
            instance.contentTemplate = options.content;
        }
    };
    DialogService.prototype.contentFrom = function (content) {
        var nodes = [];
        var componentRef = null;
        if (typeof content === 'string') {
            nodes = [this.containerService.renderer.createText(null, content)];
        }
        else if (content && !(content instanceof core_1.TemplateRef)) {
            var factory = this.resolver.resolveComponentFactory(content);
            componentRef = this.containerService.container.createComponent(factory);
            nodes = [componentRef.location.nativeElement];
        }
        return {
            componentRef: componentRef,
            nodes: [
                [],
                nodes,
                [] // <ng-content select="kendo-dialog-actions">
            ]
        };
    };
    DialogService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DialogService.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: dialog_container_service_1.DialogContainerService, },
    ]; };
    return DialogService;
}());
exports.DialogService = DialogService;

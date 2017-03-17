import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/merge';
import { ComponentFactoryResolver } from '@angular/core';
import { DialogContainerService } from './dialog-container.service';
import { DialogRef, DialogSettings } from './dialog-settings';
/**
 * Service for opening Dialog windows.
 *
 * To register a provider for the service,
 * use the [`DialogModule.forRoot`]({% slug api_dialog_dialogmodule_kendouiforangular %}#toc-forroot) method.
 */
export declare class DialogService {
    private resolver;
    private containerService;
    constructor(resolver: ComponentFactoryResolver, containerService: DialogContainerService);
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
    open(options: DialogSettings): DialogRef;
    private applyOptions(instance, options);
    private contentFrom(content?);
}

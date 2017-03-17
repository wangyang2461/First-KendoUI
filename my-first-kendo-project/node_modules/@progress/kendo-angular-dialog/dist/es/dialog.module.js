import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogTitleBarComponent } from './dialog-titlebar.component';
import { DialogActionsComponent } from './dialog-actions.component';
import { DialogService } from './dialog.service';
import { DialogContainerDirective } from './dialog-container.directive';
import { DialogContainerService } from './dialog-container.service';
/**
 * @hidden
 */
export var DIALOG_DIRECTIVES = [
    DialogComponent,
    DialogTitleBarComponent,
    DialogActionsComponent
];
/**
 * A [module](https://angular.io/docs/ts/latest/guide/ngmodule.html) that includes all Dialog components and directives.
 *
 * Imports `DialogModule` into the [root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#angular-modularity)
 * of your application or into any other sub-module that will use the Dialog component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { DialogModule } from '@progress/kendo-angular-dialog';
 * import { AppComponent } from './app.component';
 *
 * @@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, DialogModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
export var DialogModule = (function () {
    function DialogModule() {
    }
    /**
     * Creates a module with a `DialogService` provider and Dialog components defined as `entryComponents`.
     * To dynamically create Dialogs, use it along with `DialogService`.
     *
     * @param {any[]} components - Components that will be created dynamically within Dialog instances.
     * These components will be registered as `entryComponents`.
     * @return ModuleWithProviders - A module to be imported in the application module.
     *
     * @example
     * ```ts-no-run
     * import { NgModule } from '@angular/core';
     * import { BrowserModule } from '@angular/platform-browser';
     * import { DialogModule } from '@progress/kendo-angular-dialog';
     * import { AppComponent } from './app.component';
     *
     * @@NgModule({
     *     bootstrap:    [AppComponent],
     *     declarations: [AppComponent],
     *     imports: [
     *         BrowserModule,
     *         DialogModule.forRoot()
     *     ]
     * })
     * export class AppModule {
     * }
     * ```
     */
    DialogModule.forRoot = function (components) {
        var entryComponents = components || [];
        return {
            ngModule: DialogModule, providers: [
                DialogService,
                {
                    multi: true,
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: DIALOG_DIRECTIVES.concat(entryComponents)
                }
            ]
        };
    };
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DIALOG_DIRECTIVES, DialogContainerDirective],
                    entryComponents: [DIALOG_DIRECTIVES],
                    exports: [DIALOG_DIRECTIVES, DialogContainerDirective],
                    imports: [CommonModule],
                    providers: [DialogContainerService]
                },] },
    ];
    /** @nocollapse */
    DialogModule.ctorParameters = function () { return []; };
    return DialogModule;
}());

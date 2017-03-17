import { ModuleWithProviders } from '@angular/core';
/**
 * @hidden
 */
export declare const DIALOG_DIRECTIVES: any[];
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
export declare class DialogModule {
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
    static forRoot(components?: any[]): ModuleWithProviders;
}

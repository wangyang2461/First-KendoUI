import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { ColumnComponent } from './column.component';
import { ColumnGroupComponent } from './column-group.component';
import { CommandColumnComponent } from './command-column.component';
import { ToolbarComponent } from './toolbar.component';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderTemplateDirective } from './header-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { DetailTemplateDirective } from './detail-template.directive';
import { GroupHeaderTemplateDirective } from './grouping/group-header-template.directive';
import { GroupFooterTemplateDirective } from './grouping/group-footer-template.directive';
import { NoRecordsTemplateDirective } from './no-records-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { ListComponent } from './list.component';
import { SharedModule } from './shared.module';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { EditCommandDirective } from './edit-command.directive';
import { CancelCommandDirective } from './cancel-command.directive';
import { SaveCommandDirective } from './save-command.directive';
import { RemoveCommandDirective } from './remove-command.directive';
import { AddCommandDirective } from './add-command.directive';
import { DataBindingDirective } from './databinding.directive';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
import { CustomMessagesComponent } from './localization/custom-messages.component';
var exportedModules = [
    GridComponent,
    ColumnComponent,
    ColumnGroupComponent,
    CommandColumnComponent,
    ToolbarComponent,
    CellTemplateDirective,
    HeaderTemplateDirective,
    FooterTemplateDirective,
    GroupHeaderTemplateDirective,
    GroupFooterTemplateDirective,
    DetailTemplateDirective,
    NoRecordsTemplateDirective,
    EditTemplateDirective,
    EditCommandDirective,
    CancelCommandDirective,
    SaveCommandDirective,
    RemoveCommandDirective,
    AddCommandDirective,
    DataBindingDirective,
    CustomMessagesComponent
];
var declarations = [
    GridComponent,
    ToolbarComponent,
    ListComponent,
    LocalizedMessagesDirective,
    CustomMessagesComponent
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Grid component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Grid module
 * import { GridModule } from '@progress/kendo-angular-grid';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * @@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, GridModule], // import Grid module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export var GridModule = (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [CommonModule, SharedModule],
                    providers: [
                        { provide: IntlService, useClass: CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = function () { return []; };
    return GridModule;
}());

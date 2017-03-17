import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColumnComponent } from './column.component';
import { ColumnGroupComponent } from './column-group.component';
import { CommandColumnComponent } from './command-column.component';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderTemplateDirective } from './header-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { DetailTemplateDirective } from './detail-template.directive';
import { NoRecordsTemplateDirective } from './no-records-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { ColGroupComponent } from './col-group.component';
import { FieldAccessorPipe } from './field-accessor.pipe';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { ResizableContainerDirective } from './resizable.directive';
import { SelectableDirective } from './selectable.directive';
import { TableBodyComponent } from './table-body.component';
import { TemplateContextDirective } from './template-context.directive';
import { GroupHeaderTemplateDirective } from './grouping/group-header-template.directive';
import { GroupHeaderComponent } from './grouping/group-header.component';
import { GroupFooterTemplateDirective } from './grouping/group-footer-template.directive';
import { DraggableDirective } from './draggable.directive';
import { GroupPanelComponent } from './grouping/group-panel.component';
import { GroupIndicatorComponent } from './grouping/group-indicator.component';
import { CellComponent } from './cell.component';
import { PagerComponent } from './pager.component';
import { EditCommandDirective } from './edit-command.directive';
import { CancelCommandDirective } from './cancel-command.directive';
import { SaveCommandDirective } from './save-command.directive';
import { RemoveCommandDirective } from './remove-command.directive';
import { AddCommandDirective } from './add-command.directive';
import { DataBindingDirective } from './databinding.directive';
/**
 * @hidden
 */
var exportedModules = [
    ColumnComponent,
    ColumnGroupComponent,
    CommandColumnComponent,
    CellTemplateDirective,
    HeaderTemplateDirective,
    FooterTemplateDirective,
    DetailTemplateDirective,
    GroupHeaderTemplateDirective,
    GroupFooterTemplateDirective,
    EditTemplateDirective,
    ColGroupComponent,
    FieldAccessorPipe,
    FooterComponent,
    HeaderComponent,
    ResizableContainerDirective,
    SelectableDirective,
    TableBodyComponent,
    TemplateContextDirective,
    GroupHeaderComponent,
    DraggableDirective,
    GroupPanelComponent,
    GroupIndicatorComponent,
    NoRecordsTemplateDirective,
    PagerComponent,
    CellComponent,
    EditCommandDirective,
    CancelCommandDirective,
    SaveCommandDirective,
    RemoveCommandDirective,
    AddCommandDirective,
    DataBindingDirective
];
/**
 * @hidden
 */
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [exportedModules],
                    exports: [exportedModules],
                    imports: [CommonModule, ReactiveFormsModule]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());

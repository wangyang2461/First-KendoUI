"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var column_component_1 = require('./column.component');
var column_group_component_1 = require('./column-group.component');
var command_column_component_1 = require('./command-column.component');
var cell_template_directive_1 = require('./cell-template.directive');
var header_template_directive_1 = require('./header-template.directive');
var footer_template_directive_1 = require('./footer-template.directive');
var detail_template_directive_1 = require('./detail-template.directive');
var no_records_template_directive_1 = require('./no-records-template.directive');
var edit_template_directive_1 = require('./edit-template.directive');
var col_group_component_1 = require('./col-group.component');
var field_accessor_pipe_1 = require('./field-accessor.pipe');
var footer_component_1 = require('./footer.component');
var header_component_1 = require('./header.component');
var resizable_directive_1 = require('./resizable.directive');
var selectable_directive_1 = require('./selectable.directive');
var table_body_component_1 = require('./table-body.component');
var template_context_directive_1 = require('./template-context.directive');
var group_header_template_directive_1 = require('./grouping/group-header-template.directive');
var group_header_component_1 = require('./grouping/group-header.component');
var group_footer_template_directive_1 = require('./grouping/group-footer-template.directive');
var draggable_directive_1 = require('./draggable.directive');
var group_panel_component_1 = require('./grouping/group-panel.component');
var group_indicator_component_1 = require('./grouping/group-indicator.component');
var cell_component_1 = require('./cell.component');
var pager_component_1 = require('./pager.component');
var edit_command_directive_1 = require('./edit-command.directive');
var cancel_command_directive_1 = require('./cancel-command.directive');
var save_command_directive_1 = require('./save-command.directive');
var remove_command_directive_1 = require('./remove-command.directive');
var add_command_directive_1 = require('./add-command.directive');
var databinding_directive_1 = require('./databinding.directive');
/**
 * @hidden
 */
var exportedModules = [
    column_component_1.ColumnComponent,
    column_group_component_1.ColumnGroupComponent,
    command_column_component_1.CommandColumnComponent,
    cell_template_directive_1.CellTemplateDirective,
    header_template_directive_1.HeaderTemplateDirective,
    footer_template_directive_1.FooterTemplateDirective,
    detail_template_directive_1.DetailTemplateDirective,
    group_header_template_directive_1.GroupHeaderTemplateDirective,
    group_footer_template_directive_1.GroupFooterTemplateDirective,
    edit_template_directive_1.EditTemplateDirective,
    col_group_component_1.ColGroupComponent,
    field_accessor_pipe_1.FieldAccessorPipe,
    footer_component_1.FooterComponent,
    header_component_1.HeaderComponent,
    resizable_directive_1.ResizableContainerDirective,
    selectable_directive_1.SelectableDirective,
    table_body_component_1.TableBodyComponent,
    template_context_directive_1.TemplateContextDirective,
    group_header_component_1.GroupHeaderComponent,
    draggable_directive_1.DraggableDirective,
    group_panel_component_1.GroupPanelComponent,
    group_indicator_component_1.GroupIndicatorComponent,
    no_records_template_directive_1.NoRecordsTemplateDirective,
    pager_component_1.PagerComponent,
    cell_component_1.CellComponent,
    edit_command_directive_1.EditCommandDirective,
    cancel_command_directive_1.CancelCommandDirective,
    save_command_directive_1.SaveCommandDirective,
    remove_command_directive_1.RemoveCommandDirective,
    add_command_directive_1.AddCommandDirective,
    databinding_directive_1.DataBindingDirective
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exportedModules],
                    exports: [exportedModules],
                    imports: [common_1.CommonModule, forms_1.ReactiveFormsModule]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());
exports.SharedModule = SharedModule;

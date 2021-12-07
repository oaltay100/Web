
namespace LBYS {

    @Serenity.Decorators.registerClass()
    export class SelectableGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {

        // protected getPersistanceStorage(): Serenity.SettingStorage {
        //    return new Common.UserPreferenceStorage();
        // }

        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            opt.rowHeight = 27;
            return opt;
        }

        protected createSlickGrid(): Slick.Grid {
            var grid = super.createSlickGrid();
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }
    }
}
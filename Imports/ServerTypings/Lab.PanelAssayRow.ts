namespace LBYS.Lab {
    export interface PanelAssayRow {
        Id?: number;
        PanelId?: number;
        AssayId?: number;
        PanelLaboratoryId?: number;
        PanelName?: string;
        PanelPrice?: number;
        PanelInsertDate?: string;
        PanelInsertUserId?: number;
        PanelUpdateDate?: string;
        PanelUpdateUserId?: number;
        PanelIsActive?: number;
        AssayUnitId?: number;
        AssaySutId?: number;
        AssayParentId?: number;
        AssayUnit?: string;
        AssayResultType?: number;
        AssaySort?: number;
        AssayFormula?: string;
        AssayHide?: boolean;
        AssayMethod?: string;
        AssayMelisId?: number;
        AssayPrice?: number;
        AssayPrice2?: number;
        AssayDefaultValue?: string;
        AssayInsertDate?: string;
        AssayInsertUserId?: number;
        AssayUpdateDate?: string;
        AssayUpdateUserId?: number;
        AssayIsActive?: number;
    }

    export namespace PanelAssayRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Lab.PanelAssay';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            PanelId = "PanelId",
            AssayId = "AssayId",
            PanelLaboratoryId = "PanelLaboratoryId",
            PanelName = "PanelName",
            PanelPrice = "PanelPrice",
            PanelInsertDate = "PanelInsertDate",
            PanelInsertUserId = "PanelInsertUserId",
            PanelUpdateDate = "PanelUpdateDate",
            PanelUpdateUserId = "PanelUpdateUserId",
            PanelIsActive = "PanelIsActive",
            AssayUnitId = "AssayUnitId",
            AssaySutId = "AssaySutId",
            AssayParentId = "AssayParentId",
            AssayUnit = "AssayUnit",
            AssayResultType = "AssayResultType",
            AssaySort = "AssaySort",
            AssayFormula = "AssayFormula",
            AssayHide = "AssayHide",
            AssayMethod = "AssayMethod",
            AssayMelisId = "AssayMelisId",
            AssayPrice = "AssayPrice",
            AssayPrice2 = "AssayPrice2",
            AssayDefaultValue = "AssayDefaultValue",
            AssayInsertDate = "AssayInsertDate",
            AssayInsertUserId = "AssayInsertUserId",
            AssayUpdateDate = "AssayUpdateDate",
            AssayUpdateUserId = "AssayUpdateUserId",
            AssayIsActive = "AssayIsActive"
        }
    }
}

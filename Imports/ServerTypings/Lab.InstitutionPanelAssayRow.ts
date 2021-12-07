namespace LBYS.Lab {
    export interface InstitutionPanelAssayRow {
        Id?: number;
        InstitutionPanelId?: number;
        AssayId?: number;
        Price?: number;
        InstitutionPanelInstitutionId?: number;
        InstitutionPanelClaimType?: number;
        InstitutionPanelName?: string;
        InstitutionPanelPaymentType?: number;
        InstitutionPanelInsertDate?: string;
        InstitutionPanelInsertUserId?: number;
        InstitutionPanelUpdateDate?: string;
        InstitutionPanelUpdateUserId?: number;
        InstitutionPanelIsActive?: number;
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

    export namespace InstitutionPanelAssayRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Lab.InstitutionPanelAssay';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            InstitutionPanelId = "InstitutionPanelId",
            AssayId = "AssayId",
            Price = "Price",
            InstitutionPanelInstitutionId = "InstitutionPanelInstitutionId",
            InstitutionPanelClaimType = "InstitutionPanelClaimType",
            InstitutionPanelName = "InstitutionPanelName",
            InstitutionPanelPaymentType = "InstitutionPanelPaymentType",
            InstitutionPanelInsertDate = "InstitutionPanelInsertDate",
            InstitutionPanelInsertUserId = "InstitutionPanelInsertUserId",
            InstitutionPanelUpdateDate = "InstitutionPanelUpdateDate",
            InstitutionPanelUpdateUserId = "InstitutionPanelUpdateUserId",
            InstitutionPanelIsActive = "InstitutionPanelIsActive",
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

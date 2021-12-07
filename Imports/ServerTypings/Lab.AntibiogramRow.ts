namespace LBYS.Lab {
    export interface AntibiogramRow {
        UseIdrId?: number;
        BacteriumId?: number;
        AssayId?: number;
        Result?: string;
        Description?: string;
        Hide?: boolean;
        BacteriumDetailId?: number;
        BacteriumAssayId?: number;
        BacteriumName?: string;
        BacteriumResult?: string;
        BacteriumDescriptionId?: number;
        BacteriumColony?: string;
        BacteriumType?: number;
        BacteriumInsertDate?: string;
        BacteriumInsertUserId?: number;
        BacteriumUpdateDate?: string;
        BacteriumUpdateUserId?: number;
        BacteriumIsActive?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace AntibiogramRow {
        export const idProperty = 'UseIdrId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Lab.Antibiogram';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            UseIdrId = "UseIdrId",
            BacteriumId = "BacteriumId",
            AssayId = "AssayId",
            Result = "Result",
            Description = "Description",
            Hide = "Hide",
            BacteriumDetailId = "BacteriumDetailId",
            BacteriumAssayId = "BacteriumAssayId",
            BacteriumName = "BacteriumName",
            BacteriumResult = "BacteriumResult",
            BacteriumDescriptionId = "BacteriumDescriptionId",
            BacteriumColony = "BacteriumColony",
            BacteriumType = "BacteriumType",
            BacteriumInsertDate = "BacteriumInsertDate",
            BacteriumInsertUserId = "BacteriumInsertUserId",
            BacteriumUpdateDate = "BacteriumUpdateDate",
            BacteriumUpdateUserId = "BacteriumUpdateUserId",
            BacteriumIsActive = "BacteriumIsActive",
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
            AssayIsActive = "AssayIsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}

namespace LBYS.Lab {
    export interface AssayRow {
        Id?: number;
        UnitId?: number;
        SutId?: number;
        ParentId?: number;
        Unit?: string;
        ResultType?: number;
        Sort?: number;
        Formula?: string;
        Hide?: boolean;
        Method?: string;
        MelisId?: number;
        Price?: number;
        Price2?: number;
        DefaultValue?: string;
        UnitLaboratoryId?: number;
        UnitTubeId?: number;
        UnitType?: number;
        UnitName?: string;
        UnitSort?: number;
        UnitTimetoResults?: number;
        UnitIsAssayBarcode?: boolean;
        UnitInsertDate?: string;
        UnitInsertUserId?: number;
        UnitUpdateDate?: string;
        UnitUpdateUserId?: number;
        UnitIsActive?: number;
        SutName?: string;
        SutCode?: string;
        SutLoinc?: string;
        SutPoint?: number;
        SutInsertDate?: string;
        SutInsertUserId?: number;
        SutUpdateDate?: string;
        SutUpdateUserId?: number;
        SutIsActive?: number;
        ParentUnitId?: number;
        ParentSutId?: number;
        ParentParentId?: number;
        ParentUnit?: string;
        ParentResultType?: number;
        ParentSort?: number;
        ParentFormula?: string;
        ParentHide?: boolean;
        ParentMethod?: string;
        ParentMelisId?: number;
        ParentPrice?: number;
        ParentPrice2?: number;
        ParentDefaultValue?: string;
        ParentInsertDate?: string;
        ParentInsertUserId?: number;
        ParentUpdateDate?: string;
        ParentUpdateUserId?: number;
        ParentIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace AssayRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Unit';
        export const localTextPrefix = 'Lab.Assay';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            UnitId = "UnitId",
            SutId = "SutId",
            ParentId = "ParentId",
            Unit = "Unit",
            ResultType = "ResultType",
            Sort = "Sort",
            Formula = "Formula",
            Hide = "Hide",
            Method = "Method",
            MelisId = "MelisId",
            Price = "Price",
            Price2 = "Price2",
            DefaultValue = "DefaultValue",
            UnitLaboratoryId = "UnitLaboratoryId",
            UnitTubeId = "UnitTubeId",
            UnitType = "UnitType",
            UnitName = "UnitName",
            UnitSort = "UnitSort",
            UnitTimetoResults = "UnitTimetoResults",
            UnitIsAssayBarcode = "UnitIsAssayBarcode",
            UnitInsertDate = "UnitInsertDate",
            UnitInsertUserId = "UnitInsertUserId",
            UnitUpdateDate = "UnitUpdateDate",
            UnitUpdateUserId = "UnitUpdateUserId",
            UnitIsActive = "UnitIsActive",
            SutName = "SutName",
            SutCode = "SutCode",
            SutLoinc = "SutLoinc",
            SutPoint = "SutPoint",
            SutInsertDate = "SutInsertDate",
            SutInsertUserId = "SutInsertUserId",
            SutUpdateDate = "SutUpdateDate",
            SutUpdateUserId = "SutUpdateUserId",
            SutIsActive = "SutIsActive",
            ParentUnitId = "ParentUnitId",
            ParentSutId = "ParentSutId",
            ParentParentId = "ParentParentId",
            ParentUnit = "ParentUnit",
            ParentResultType = "ParentResultType",
            ParentSort = "ParentSort",
            ParentFormula = "ParentFormula",
            ParentHide = "ParentHide",
            ParentMethod = "ParentMethod",
            ParentMelisId = "ParentMelisId",
            ParentPrice = "ParentPrice",
            ParentPrice2 = "ParentPrice2",
            ParentDefaultValue = "ParentDefaultValue",
            ParentInsertDate = "ParentInsertDate",
            ParentInsertUserId = "ParentInsertUserId",
            ParentUpdateDate = "ParentUpdateDate",
            ParentUpdateUserId = "ParentUpdateUserId",
            ParentIsActive = "ParentIsActive",
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

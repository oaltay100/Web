namespace LBYS.Lab {
    export interface LekRow {
        Id?: number;
        UnitId?: number;
        Type?: number;
        Lek?: number;
        Warning?: number;
        Error?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace LekRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Lab.Lek';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            UnitId = "UnitId",
            Type = "Type",
            Lek = "Lek",
            Warning = "Warning",
            Error = "Error",
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

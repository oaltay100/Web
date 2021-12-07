namespace LBYS.Lab {
    export interface ControlRow {
        Id?: number;
        LevelsId?: number;
        RecordDate?: string;
        Result?: string;
        Description?: string;
        LevelsCodeId?: number;
        LevelsName?: string;
        LevelsLow?: number;
        LevelsHigh?: number;
        LevelsLot?: string;
        LevelsHide?: boolean;
        LevelsInsertDate?: string;
        LevelsInsertUserId?: number;
        LevelsUpdateDate?: string;
        LevelsUpdateUserId?: number;
        LevelsIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ControlRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Lab.Control';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            LevelsId = "LevelsId",
            RecordDate = "RecordDate",
            Result = "Result",
            Description = "Description",
            LevelsCodeId = "LevelsCodeId",
            LevelsName = "LevelsName",
            LevelsLow = "LevelsLow",
            LevelsHigh = "LevelsHigh",
            LevelsLot = "LevelsLot",
            LevelsHide = "LevelsHide",
            LevelsInsertDate = "LevelsInsertDate",
            LevelsInsertUserId = "LevelsInsertUserId",
            LevelsUpdateDate = "LevelsUpdateDate",
            LevelsUpdateUserId = "LevelsUpdateUserId",
            LevelsIsActive = "LevelsIsActive",
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

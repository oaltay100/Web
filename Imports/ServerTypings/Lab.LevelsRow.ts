namespace LBYS.Lab {
    export interface LevelsRow {
        Id?: number;
        CodeId?: number;
        Name?: string;
        Low?: number;
        High?: number;
        Lot?: string;
        Hide?: boolean;
        CodeAssayId?: number;
        CodeDeviceId?: number;
        Code?: string;
        CodeFactor?: number;
        CodeDigit?: number;
        CodeDirection?: boolean;
        CodeInsertDate?: string;
        CodeInsertUserId?: number;
        CodeUpdateDate?: string;
        CodeUpdateUserId?: number;
        CodeIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace LevelsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Levels';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            CodeId = "CodeId",
            Name = "Name",
            Low = "Low",
            High = "High",
            Lot = "Lot",
            Hide = "Hide",
            CodeAssayId = "CodeAssayId",
            CodeDeviceId = "CodeDeviceId",
            Code = "Code",
            CodeFactor = "CodeFactor",
            CodeDigit = "CodeDigit",
            CodeDirection = "CodeDirection",
            CodeInsertDate = "CodeInsertDate",
            CodeInsertUserId = "CodeInsertUserId",
            CodeUpdateDate = "CodeUpdateDate",
            CodeUpdateUserId = "CodeUpdateUserId",
            CodeIsActive = "CodeIsActive",
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

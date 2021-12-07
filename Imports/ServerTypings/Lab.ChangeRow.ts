namespace LBYS.Lab {
    export interface ChangeRow {
        Id?: number;
        DetailId?: number;
        Result?: string;
        DetailSampleId?: number;
        DetailAssayId?: number;
        DetailParentId?: number;
        DetailResult?: string;
        DetailResultDate?: string;
        DetailResultUserId?: number;
        DetailDeviceId?: number;
        DetailDeviceDate?: string;
        DetailDescriptionId?: number;
        DetailPicture?: string;
        DetailUnit?: string;
        DetailNLow?: number;
        DetailNHigh?: number;
        DetailPLow?: number;
        DetailPHigh?: number;
        DetailSpecial?: string;
        DetailImportance?: number;
        DetailPrice?: number;
        DetailInstitutionId?: number;
        DetailInsertDate?: string;
        DetailInsertUserId?: number;
        DetailUpdateDate?: string;
        DetailUpdateUserId?: number;
        DetailIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ChangeRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Lab.Change';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            DetailId = "DetailId",
            Result = "Result",
            DetailSampleId = "DetailSampleId",
            DetailAssayId = "DetailAssayId",
            DetailParentId = "DetailParentId",
            DetailResult = "DetailResult",
            DetailResultDate = "DetailResultDate",
            DetailResultUserId = "DetailResultUserId",
            DetailDeviceId = "DetailDeviceId",
            DetailDeviceDate = "DetailDeviceDate",
            DetailDescriptionId = "DetailDescriptionId",
            DetailPicture = "DetailPicture",
            DetailUnit = "DetailUnit",
            DetailNLow = "DetailNLow",
            DetailNHigh = "DetailNHigh",
            DetailPLow = "DetailPLow",
            DetailPHigh = "DetailPHigh",
            DetailSpecial = "DetailSpecial",
            DetailImportance = "DetailImportance",
            DetailPrice = "DetailPrice",
            DetailInstitutionId = "DetailInstitutionId",
            DetailInsertDate = "DetailInsertDate",
            DetailInsertUserId = "DetailInsertUserId",
            DetailUpdateDate = "DetailUpdateDate",
            DetailUpdateUserId = "DetailUpdateUserId",
            DetailIsActive = "DetailIsActive",
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

namespace LBYS.Lab {
    export interface ImageRow {
        Id?: number;
        DetailId?: number;
        Path?: string;
        StudyUid?: string;
        SeriUid?: string;
        ImageUid?: string;
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

    export namespace ImageRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Path';
        export const localTextPrefix = 'Lab.Image';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            DetailId = "DetailId",
            Path = "Path",
            StudyUid = "StudyUid",
            SeriUid = "SeriUid",
            ImageUid = "ImageUid",
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

namespace LBYS.Lab {
    export interface UserUnitRow {
        Id?: number;
        UserId?: number;
        UnitId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
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
    }

    export namespace UserUnitRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Lab.UserUnit';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            UserId = "UserId",
            UnitId = "UnitId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
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
            UnitIsActive = "UnitIsActive"
        }
    }
}

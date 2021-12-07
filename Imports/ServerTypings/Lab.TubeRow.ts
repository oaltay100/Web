namespace LBYS.Lab {
    export interface TubeRow {
        Id?: number;
        MaterialId?: number;
        Name?: string;
        Bar?: number;
        MaterialName?: string;
        MaterialInsertDate?: string;
        MaterialInsertUserId?: number;
        MaterialUpdateDate?: string;
        MaterialUpdateUserId?: number;
        MaterialIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace TubeRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Tube';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            MaterialId = "MaterialId",
            Name = "Name",
            Bar = "Bar",
            MaterialName = "MaterialName",
            MaterialInsertDate = "MaterialInsertDate",
            MaterialInsertUserId = "MaterialInsertUserId",
            MaterialUpdateDate = "MaterialUpdateDate",
            MaterialUpdateUserId = "MaterialUpdateUserId",
            MaterialIsActive = "MaterialIsActive",
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

namespace LBYS.Lab {
    export interface PatientRow {
        Id?: number;
        Name?: string;
        IdNumber?: string;
        FatherName?: string;
        MotherName?: string;
        Birthdate?: string;
        Place?: string;
        BloodGroup?: number;
        Phone?: string;
        EMail?: string;
        Address?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PatientRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Patient';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            IdNumber = "IdNumber",
            FatherName = "FatherName",
            MotherName = "MotherName",
            Birthdate = "Birthdate",
            Place = "Place",
            BloodGroup = "BloodGroup",
            Phone = "Phone",
            EMail = "EMail",
            Address = "Address",
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

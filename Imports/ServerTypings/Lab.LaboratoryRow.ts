namespace LBYS.Lab {
    export interface LaboratoryRow {
        Id?: number;
        Name?: string;
        Logo?: string;
        Phone?: string;
        Fax?: string;
        EMail?: string;
        Address?: string;
        Mernis?: string;
        Institution?: string;
        SrvMelis?: boolean;
        SrvENabiz?: boolean;
        SrvCovid?: boolean;
        IsPaymentMandatory?: boolean;
        IsAcceptrequired?: boolean;
        IsDoNotReprint?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace LaboratoryRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Laboratory';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Logo = "Logo",
            Phone = "Phone",
            Fax = "Fax",
            EMail = "EMail",
            Address = "Address",
            Mernis = "Mernis",
            Institution = "Institution",
            SrvMelis = "SrvMelis",
            SrvENabiz = "SrvENabiz",
            SrvCovid = "SrvCovid",
            IsPaymentMandatory = "IsPaymentMandatory",
            IsAcceptrequired = "IsAcceptrequired",
            IsDoNotReprint = "IsDoNotReprint",
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

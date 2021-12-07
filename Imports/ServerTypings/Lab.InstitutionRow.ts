namespace LBYS.Lab {
    export interface InstitutionRow {
        Id?: number;
        LaboratoryId?: number;
        IndustryId?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
        PaymentType?: number;
        Price?: number;
        PriceType?: number;
        IsExternal?: boolean;
        Symbol?: string;
        LaboratoryName?: string;
        LaboratoryLogo?: string;
        LaboratoryPhone?: string;
        LaboratoryFax?: string;
        LaboratoryEMail?: string;
        LaboratoryAddress?: string;
        LaboratoryMernis?: string;
        LaboratoryInstitution?: string;
        LaboratorySrvMelis?: boolean;
        LaboratorySrvENabiz?: boolean;
        LaboratorySrvCovid?: boolean;
        LaboratoryIsPaymentMandatory?: boolean;
        LaboratoryIsAcceptrequired?: boolean;
        LaboratoryIsDoNotReprint?: boolean;
        LaboratoryInsertDate?: string;
        LaboratoryInsertUserId?: number;
        LaboratoryUpdateDate?: string;
        LaboratoryUpdateUserId?: number;
        LaboratoryIsActive?: number;
        IndustryName?: string;
        IndustryPhone?: string;
        IndustryAddress?: string;
        IndustryInsertDate?: string;
        IndustryInsertUserId?: number;
        IndustryUpdateDate?: string;
        IndustryUpdateUserId?: number;
        IndustryIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace InstitutionRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Institution';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            IndustryId = "IndustryId",
            Name = "Name",
            Phone = "Phone",
            Address = "Address",
            PaymentType = "PaymentType",
            Price = "Price",
            PriceType = "PriceType",
            IsExternal = "IsExternal",
            Symbol = "Symbol",
            LaboratoryName = "LaboratoryName",
            LaboratoryLogo = "LaboratoryLogo",
            LaboratoryPhone = "LaboratoryPhone",
            LaboratoryFax = "LaboratoryFax",
            LaboratoryEMail = "LaboratoryEMail",
            LaboratoryAddress = "LaboratoryAddress",
            LaboratoryMernis = "LaboratoryMernis",
            LaboratoryInstitution = "LaboratoryInstitution",
            LaboratorySrvMelis = "LaboratorySrvMelis",
            LaboratorySrvENabiz = "LaboratorySrvENabiz",
            LaboratorySrvCovid = "LaboratorySrvCovid",
            LaboratoryIsPaymentMandatory = "LaboratoryIsPaymentMandatory",
            LaboratoryIsAcceptrequired = "LaboratoryIsAcceptrequired",
            LaboratoryIsDoNotReprint = "LaboratoryIsDoNotReprint",
            LaboratoryInsertDate = "LaboratoryInsertDate",
            LaboratoryInsertUserId = "LaboratoryInsertUserId",
            LaboratoryUpdateDate = "LaboratoryUpdateDate",
            LaboratoryUpdateUserId = "LaboratoryUpdateUserId",
            LaboratoryIsActive = "LaboratoryIsActive",
            IndustryName = "IndustryName",
            IndustryPhone = "IndustryPhone",
            IndustryAddress = "IndustryAddress",
            IndustryInsertDate = "IndustryInsertDate",
            IndustryInsertUserId = "IndustryInsertUserId",
            IndustryUpdateDate = "IndustryUpdateDate",
            IndustryUpdateUserId = "IndustryUpdateUserId",
            IndustryIsActive = "IndustryIsActive",
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

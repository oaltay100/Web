namespace LBYS.Lab {
    export interface InvoiceRow {
        Id?: number;
        LaboratoryId?: number;
        InstitutionId?: number;
        Year?: number;
        Number?: number;
        Date?: string;
        Prite?: number;
        Counts?: number;
        Status?: number;
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
        InstitutionLaboratoryId?: number;
        InstitutionIndustryId?: number;
        InstitutionName?: string;
        InstitutionPhone?: string;
        InstitutionAddress?: string;
        InstitutionPaymentType?: number;
        InstitutionPrice?: number;
        InstitutionPriceType?: number;
        InstitutionIsExternal?: boolean;
        InstitutionSymbol?: string;
        InstitutionInsertDate?: string;
        InstitutionInsertUserId?: number;
        InstitutionUpdateDate?: string;
        InstitutionUpdateUserId?: number;
        InstitutionIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace InvoiceRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Lab.Invoice';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            InstitutionId = "InstitutionId",
            Year = "Year",
            Number = "Number",
            Date = "Date",
            Prite = "Prite",
            Counts = "Counts",
            Status = "Status",
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
            InstitutionLaboratoryId = "InstitutionLaboratoryId",
            InstitutionIndustryId = "InstitutionIndustryId",
            InstitutionName = "InstitutionName",
            InstitutionPhone = "InstitutionPhone",
            InstitutionAddress = "InstitutionAddress",
            InstitutionPaymentType = "InstitutionPaymentType",
            InstitutionPrice = "InstitutionPrice",
            InstitutionPriceType = "InstitutionPriceType",
            InstitutionIsExternal = "InstitutionIsExternal",
            InstitutionSymbol = "InstitutionSymbol",
            InstitutionInsertDate = "InstitutionInsertDate",
            InstitutionInsertUserId = "InstitutionInsertUserId",
            InstitutionUpdateDate = "InstitutionUpdateDate",
            InstitutionUpdateUserId = "InstitutionUpdateUserId",
            InstitutionIsActive = "InstitutionIsActive",
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

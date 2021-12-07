namespace LBYS.Lab {
    export interface ClaimRow {
        Id?: number;
        LaboratoryId?: number;
        RecordDate?: string;
        InstitutionId?: number;
        PatientId?: number;
        ClaimType?: number;
        Priorty?: number;
        Description?: string;
        InvoiceId?: number;
        PaymentType?: number;
        PaymentStatus?: boolean;
        Fee?: number;
        Price?: number;
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
        PatientName?: string;
        PatientIdNumber?: string;
        PatientFatherName?: string;
        PatientMotherName?: string;
        PatientBirthdate?: string;
        PatientPlace?: string;
        PatientBloodGroup?: number;
        PatientPhone?: string;
        PatientEMail?: string;
        PatientAddress?: string;
        PatientInsertDate?: string;
        PatientInsertUserId?: number;
        PatientUpdateDate?: string;
        PatientUpdateUserId?: number;
        PatientIsActive?: number;
        InvoiceLaboratoryId?: number;
        InvoiceInstitutionId?: number;
        InvoiceYear?: number;
        InvoiceNumber?: number;
        InvoiceDate?: string;
        InvoicePrite?: number;
        InvoiceCounts?: number;
        InvoiceStatus?: number;
        InvoiceInsertDate?: string;
        InvoiceInsertUserId?: number;
        InvoiceUpdateDate?: string;
        InvoiceUpdateUserId?: number;
        InvoiceIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ClaimRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Lab.Claim';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            RecordDate = "RecordDate",
            InstitutionId = "InstitutionId",
            PatientId = "PatientId",
            ClaimType = "ClaimType",
            Priorty = "Priorty",
            Description = "Description",
            InvoiceId = "InvoiceId",
            PaymentType = "PaymentType",
            PaymentStatus = "PaymentStatus",
            Fee = "Fee",
            Price = "Price",
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
            PatientName = "PatientName",
            PatientIdNumber = "PatientIdNumber",
            PatientFatherName = "PatientFatherName",
            PatientMotherName = "PatientMotherName",
            PatientBirthdate = "PatientBirthdate",
            PatientPlace = "PatientPlace",
            PatientBloodGroup = "PatientBloodGroup",
            PatientPhone = "PatientPhone",
            PatientEMail = "PatientEMail",
            PatientAddress = "PatientAddress",
            PatientInsertDate = "PatientInsertDate",
            PatientInsertUserId = "PatientInsertUserId",
            PatientUpdateDate = "PatientUpdateDate",
            PatientUpdateUserId = "PatientUpdateUserId",
            PatientIsActive = "PatientIsActive",
            InvoiceLaboratoryId = "InvoiceLaboratoryId",
            InvoiceInstitutionId = "InvoiceInstitutionId",
            InvoiceYear = "InvoiceYear",
            InvoiceNumber = "InvoiceNumber",
            InvoiceDate = "InvoiceDate",
            InvoicePrite = "InvoicePrite",
            InvoiceCounts = "InvoiceCounts",
            InvoiceStatus = "InvoiceStatus",
            InvoiceInsertDate = "InvoiceInsertDate",
            InvoiceInsertUserId = "InvoiceInsertUserId",
            InvoiceUpdateDate = "InvoiceUpdateDate",
            InvoiceUpdateUserId = "InvoiceUpdateUserId",
            InvoiceIsActive = "InvoiceIsActive",
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

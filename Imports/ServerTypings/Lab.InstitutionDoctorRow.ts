namespace LBYS.Lab {
    export interface InstitutionDoctorRow {
        Id?: number;
        InstitutionId?: number;
        DoctorId?: number;
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
        DoctorLaboratoryId?: number;
        DoctorName?: string;
        DoctorIdNumber?: string;
        DoctorRegistrationNumber?: string;
        DoctorGender?: number;
        DoctorPhone?: string;
        DoctorEMail?: string;
        DoctorAddress?: string;
        DoctorTask?: number;
        DoctorAppellation?: number;
        DoctorInsertDate?: string;
        DoctorInsertUserId?: number;
        DoctorUpdateDate?: string;
        DoctorUpdateUserId?: number;
        DoctorIsActive?: number;
    }

    export namespace InstitutionDoctorRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Lab.InstitutionDoctor';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            InstitutionId = "InstitutionId",
            DoctorId = "DoctorId",
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
            DoctorLaboratoryId = "DoctorLaboratoryId",
            DoctorName = "DoctorName",
            DoctorIdNumber = "DoctorIdNumber",
            DoctorRegistrationNumber = "DoctorRegistrationNumber",
            DoctorGender = "DoctorGender",
            DoctorPhone = "DoctorPhone",
            DoctorEMail = "DoctorEMail",
            DoctorAddress = "DoctorAddress",
            DoctorTask = "DoctorTask",
            DoctorAppellation = "DoctorAppellation",
            DoctorInsertDate = "DoctorInsertDate",
            DoctorInsertUserId = "DoctorInsertUserId",
            DoctorUpdateDate = "DoctorUpdateDate",
            DoctorUpdateUserId = "DoctorUpdateUserId",
            DoctorIsActive = "DoctorIsActive"
        }
    }
}

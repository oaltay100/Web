namespace LBYS.Lab {
    export interface ReportRow {
        Id?: number;
        LaboratoryId?: number;
        Type?: number;
        Report?: string;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ReportRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Report';
        export const localTextPrefix = 'Lab.Report';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            Type = "Type",
            Report = "Report",
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

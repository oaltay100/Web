namespace LBYS.Lab {
    export interface SampleRow {
        Id?: number;
        ClaimId?: number;
        UnitId?: number;
        Barcode?: number;
        Rack?: string;
        ClaimLaboratoryId?: number;
        ClaimRecordDate?: string;
        ClaimInstitutionId?: number;
        ClaimPatientId?: number;
        ClaimClaimType?: number;
        ClaimPriorty?: number;
        ClaimDescription?: string;
        ClaimInvoiceId?: number;
        ClaimPaymentType?: number;
        ClaimPaymentStatus?: boolean;
        ClaimFee?: number;
        ClaimPrice?: number;
        ClaimInsertDate?: string;
        ClaimInsertUserId?: number;
        ClaimUpdateDate?: string;
        ClaimUpdateUserId?: number;
        ClaimIsActive?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace SampleRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Rack';
        export const localTextPrefix = 'Lab.Sample';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            ClaimId = "ClaimId",
            UnitId = "UnitId",
            Barcode = "Barcode",
            Rack = "Rack",
            ClaimLaboratoryId = "ClaimLaboratoryId",
            ClaimRecordDate = "ClaimRecordDate",
            ClaimInstitutionId = "ClaimInstitutionId",
            ClaimPatientId = "ClaimPatientId",
            ClaimClaimType = "ClaimClaimType",
            ClaimPriorty = "ClaimPriorty",
            ClaimDescription = "ClaimDescription",
            ClaimInvoiceId = "ClaimInvoiceId",
            ClaimPaymentType = "ClaimPaymentType",
            ClaimPaymentStatus = "ClaimPaymentStatus",
            ClaimFee = "ClaimFee",
            ClaimPrice = "ClaimPrice",
            ClaimInsertDate = "ClaimInsertDate",
            ClaimInsertUserId = "ClaimInsertUserId",
            ClaimUpdateDate = "ClaimUpdateDate",
            ClaimUpdateUserId = "ClaimUpdateUserId",
            ClaimIsActive = "ClaimIsActive",
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
            UnitIsActive = "UnitIsActive",
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

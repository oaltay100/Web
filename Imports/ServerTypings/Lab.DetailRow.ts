namespace LBYS.Lab {
    export interface DetailRow {
        Id?: number;
        SampleId?: number;
        AssayId?: number;
        ParentId?: number;
        Result?: string;
        ResultDate?: string;
        ResultUserId?: number;
        DeviceId?: number;
        DeviceDate?: string;
        DescriptionId?: number;
        Picture?: string;
        Unit?: string;
        NLow?: number;
        NHigh?: number;
        PLow?: number;
        PHigh?: number;
        Special?: string;
        Importance?: number;
        Price?: number;
        InstitutionId?: number;
        SampleClaimId?: number;
        SampleUnitId?: number;
        SampleBarcode?: number;
        SampleRack?: string;
        SampleInsertDate?: string;
        SampleInsertUserId?: number;
        SampleUpdateDate?: string;
        SampleUpdateUserId?: number;
        SampleIsActive?: number;
        AssayUnitId?: number;
        AssaySutId?: number;
        AssayParentId?: number;
        AssayUnit?: string;
        AssayResultType?: number;
        AssaySort?: number;
        AssayFormula?: string;
        AssayHide?: boolean;
        AssayMethod?: string;
        AssayMelisId?: number;
        AssayPrice?: number;
        AssayPrice2?: number;
        AssayDefaultValue?: string;
        AssayInsertDate?: string;
        AssayInsertUserId?: number;
        AssayUpdateDate?: string;
        AssayUpdateUserId?: number;
        AssayIsActive?: number;
        ParentSampleId?: number;
        ParentAssayId?: number;
        ParentParentId?: number;
        ParentResult?: string;
        ParentResultDate?: string;
        ParentResultUserId?: number;
        ParentDeviceId?: number;
        ParentDeviceDate?: string;
        ParentDescriptionId?: number;
        ParentPicture?: string;
        ParentUnit?: string;
        ParentNLow?: number;
        ParentNHigh?: number;
        ParentPLow?: number;
        ParentPHigh?: number;
        ParentSpecial?: string;
        ParentImportance?: number;
        ParentPrice?: number;
        ParentInstitutionId?: number;
        ParentInsertDate?: string;
        ParentInsertUserId?: number;
        ParentUpdateDate?: string;
        ParentUpdateUserId?: number;
        ParentIsActive?: number;
        DescriptionType?: number;
        Description?: string;
        DescriptionCode?: string;
        DescriptionInsertDate?: string;
        DescriptionInsertUserId?: number;
        DescriptionUpdateDate?: string;
        DescriptionUpdateUserId?: number;
        DescriptionIsActive?: number;
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

    export namespace DetailRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Result';
        export const localTextPrefix = 'Lab.Detail';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            SampleId = "SampleId",
            AssayId = "AssayId",
            ParentId = "ParentId",
            Result = "Result",
            ResultDate = "ResultDate",
            ResultUserId = "ResultUserId",
            DeviceId = "DeviceId",
            DeviceDate = "DeviceDate",
            DescriptionId = "DescriptionId",
            Picture = "Picture",
            Unit = "Unit",
            NLow = "NLow",
            NHigh = "NHigh",
            PLow = "PLow",
            PHigh = "PHigh",
            Special = "Special",
            Importance = "Importance",
            Price = "Price",
            InstitutionId = "InstitutionId",
            SampleClaimId = "SampleClaimId",
            SampleUnitId = "SampleUnitId",
            SampleBarcode = "SampleBarcode",
            SampleRack = "SampleRack",
            SampleInsertDate = "SampleInsertDate",
            SampleInsertUserId = "SampleInsertUserId",
            SampleUpdateDate = "SampleUpdateDate",
            SampleUpdateUserId = "SampleUpdateUserId",
            SampleIsActive = "SampleIsActive",
            AssayUnitId = "AssayUnitId",
            AssaySutId = "AssaySutId",
            AssayParentId = "AssayParentId",
            AssayUnit = "AssayUnit",
            AssayResultType = "AssayResultType",
            AssaySort = "AssaySort",
            AssayFormula = "AssayFormula",
            AssayHide = "AssayHide",
            AssayMethod = "AssayMethod",
            AssayMelisId = "AssayMelisId",
            AssayPrice = "AssayPrice",
            AssayPrice2 = "AssayPrice2",
            AssayDefaultValue = "AssayDefaultValue",
            AssayInsertDate = "AssayInsertDate",
            AssayInsertUserId = "AssayInsertUserId",
            AssayUpdateDate = "AssayUpdateDate",
            AssayUpdateUserId = "AssayUpdateUserId",
            AssayIsActive = "AssayIsActive",
            ParentSampleId = "ParentSampleId",
            ParentAssayId = "ParentAssayId",
            ParentParentId = "ParentParentId",
            ParentResult = "ParentResult",
            ParentResultDate = "ParentResultDate",
            ParentResultUserId = "ParentResultUserId",
            ParentDeviceId = "ParentDeviceId",
            ParentDeviceDate = "ParentDeviceDate",
            ParentDescriptionId = "ParentDescriptionId",
            ParentPicture = "ParentPicture",
            ParentUnit = "ParentUnit",
            ParentNLow = "ParentNLow",
            ParentNHigh = "ParentNHigh",
            ParentPLow = "ParentPLow",
            ParentPHigh = "ParentPHigh",
            ParentSpecial = "ParentSpecial",
            ParentImportance = "ParentImportance",
            ParentPrice = "ParentPrice",
            ParentInstitutionId = "ParentInstitutionId",
            ParentInsertDate = "ParentInsertDate",
            ParentInsertUserId = "ParentInsertUserId",
            ParentUpdateDate = "ParentUpdateDate",
            ParentUpdateUserId = "ParentUpdateUserId",
            ParentIsActive = "ParentIsActive",
            DescriptionType = "DescriptionType",
            Description = "Description",
            DescriptionCode = "DescriptionCode",
            DescriptionInsertDate = "DescriptionInsertDate",
            DescriptionInsertUserId = "DescriptionInsertUserId",
            DescriptionUpdateDate = "DescriptionUpdateDate",
            DescriptionUpdateUserId = "DescriptionUpdateUserId",
            DescriptionIsActive = "DescriptionIsActive",
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

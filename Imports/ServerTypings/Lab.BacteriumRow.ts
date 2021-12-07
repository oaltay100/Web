namespace LBYS.Lab {
    export interface BacteriumRow {
        Id?: number;
        DetailId?: number;
        AssayId?: number;
        Name?: string;
        Result?: string;
        DescriptionId?: number;
        Colony?: string;
        Type?: number;
        DetailSampleId?: number;
        DetailAssayId?: number;
        DetailParentId?: number;
        DetailResult?: string;
        DetailResultDate?: string;
        DetailResultUserId?: number;
        DetailDeviceId?: number;
        DetailDeviceDate?: string;
        DetailDescriptionId?: number;
        DetailPicture?: string;
        DetailUnit?: string;
        DetailNLow?: number;
        DetailNHigh?: number;
        DetailPLow?: number;
        DetailPHigh?: number;
        DetailSpecial?: string;
        DetailImportance?: number;
        DetailPrice?: number;
        DetailInstitutionId?: number;
        DetailInsertDate?: string;
        DetailInsertUserId?: number;
        DetailUpdateDate?: string;
        DetailUpdateUserId?: number;
        DetailIsActive?: number;
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
        DescriptionType?: number;
        Description?: string;
        DescriptionCode?: string;
        DescriptionInsertDate?: string;
        DescriptionInsertUserId?: number;
        DescriptionUpdateDate?: string;
        DescriptionUpdateUserId?: number;
        DescriptionIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace BacteriumRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Lab.Bacterium';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            DetailId = "DetailId",
            AssayId = "AssayId",
            Name = "Name",
            Result = "Result",
            DescriptionId = "DescriptionId",
            Colony = "Colony",
            Type = "Type",
            DetailSampleId = "DetailSampleId",
            DetailAssayId = "DetailAssayId",
            DetailParentId = "DetailParentId",
            DetailResult = "DetailResult",
            DetailResultDate = "DetailResultDate",
            DetailResultUserId = "DetailResultUserId",
            DetailDeviceId = "DetailDeviceId",
            DetailDeviceDate = "DetailDeviceDate",
            DetailDescriptionId = "DetailDescriptionId",
            DetailPicture = "DetailPicture",
            DetailUnit = "DetailUnit",
            DetailNLow = "DetailNLow",
            DetailNHigh = "DetailNHigh",
            DetailPLow = "DetailPLow",
            DetailPHigh = "DetailPHigh",
            DetailSpecial = "DetailSpecial",
            DetailImportance = "DetailImportance",
            DetailPrice = "DetailPrice",
            DetailInstitutionId = "DetailInstitutionId",
            DetailInsertDate = "DetailInsertDate",
            DetailInsertUserId = "DetailInsertUserId",
            DetailUpdateDate = "DetailUpdateDate",
            DetailUpdateUserId = "DetailUpdateUserId",
            DetailIsActive = "DetailIsActive",
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
            DescriptionType = "DescriptionType",
            Description = "Description",
            DescriptionCode = "DescriptionCode",
            DescriptionInsertDate = "DescriptionInsertDate",
            DescriptionInsertUserId = "DescriptionInsertUserId",
            DescriptionUpdateDate = "DescriptionUpdateDate",
            DescriptionUpdateUserId = "DescriptionUpdateUserId",
            DescriptionIsActive = "DescriptionIsActive",
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

namespace LBYS.Lab {
    export interface CodeRow {
        Id?: number;
        AssayId?: number;
        DeviceId?: number;
        Code?: string;
        Factor?: number;
        Digit?: number;
        Direction?: boolean;
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
        DeviceLaboratoryId?: number;
        DeviceType?: number;
        DeviceName?: string;
        DeviceIp?: string;
        DeviceHost?: string;
        DevicePort?: string;
        DeviceBoudrate?: number;
        DeviceDatabits?: number;
        DeviceStopbits?: number;
        DeviceParity?: number;
        DeviceHandshake?: number;
        DeviceDtr?: boolean;
        DeviceRts?: boolean;
        DeviceInsertDate?: string;
        DeviceInsertUserId?: number;
        DeviceUpdateDate?: string;
        DeviceUpdateUserId?: number;
        DeviceIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace CodeRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Lab.Code';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            AssayId = "AssayId",
            DeviceId = "DeviceId",
            Code = "Code",
            Factor = "Factor",
            Digit = "Digit",
            Direction = "Direction",
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
            DeviceLaboratoryId = "DeviceLaboratoryId",
            DeviceType = "DeviceType",
            DeviceName = "DeviceName",
            DeviceIp = "DeviceIp",
            DeviceHost = "DeviceHost",
            DevicePort = "DevicePort",
            DeviceBoudrate = "DeviceBoudrate",
            DeviceDatabits = "DeviceDatabits",
            DeviceStopbits = "DeviceStopbits",
            DeviceParity = "DeviceParity",
            DeviceHandshake = "DeviceHandshake",
            DeviceDtr = "DeviceDtr",
            DeviceRts = "DeviceRts",
            DeviceInsertDate = "DeviceInsertDate",
            DeviceInsertUserId = "DeviceInsertUserId",
            DeviceUpdateDate = "DeviceUpdateDate",
            DeviceUpdateUserId = "DeviceUpdateUserId",
            DeviceIsActive = "DeviceIsActive",
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

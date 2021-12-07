namespace LBYS.Lab {
    export interface AcceptRow {
        Id?: number;
        SampleId?: number;
        Accept?: number;
        AcceptDate?: string;
        AcceptUserId?: number;
        SampleClaimId?: number;
        SampleUnitId?: number;
        SampleBarcode?: number;
        SampleRack?: string;
        SampleInsertDate?: string;
        SampleInsertUserId?: number;
        SampleUpdateDate?: string;
        SampleUpdateUserId?: number;
        SampleIsActive?: number;
        AcceptUserUsername?: string;
        AcceptUserDisplayName?: string;
        AcceptUserEmail?: string;
        AcceptUserSource?: string;
        AcceptUserLastDirectoryUpdate?: string;
        AcceptUserUserImage?: string;
        AcceptUserInsertDate?: string;
        AcceptUserInsertUserId?: number;
        AcceptUserUpdateDate?: string;
        AcceptUserUpdateUserId?: number;
        AcceptUserIsActive?: number;
    }

    export namespace AcceptRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Lab.Accept';
        export const deletePermission = '?';
        export const insertPermission = '?';
        export const readPermission = '?';
        export const updatePermission = '?';

        export declare const enum Fields {
            Id = "Id",
            SampleId = "SampleId",
            Accept = "Accept",
            AcceptDate = "AcceptDate",
            AcceptUserId = "AcceptUserId",
            SampleClaimId = "SampleClaimId",
            SampleUnitId = "SampleUnitId",
            SampleBarcode = "SampleBarcode",
            SampleRack = "SampleRack",
            SampleInsertDate = "SampleInsertDate",
            SampleInsertUserId = "SampleInsertUserId",
            SampleUpdateDate = "SampleUpdateDate",
            SampleUpdateUserId = "SampleUpdateUserId",
            SampleIsActive = "SampleIsActive",
            AcceptUserUsername = "AcceptUserUsername",
            AcceptUserDisplayName = "AcceptUserDisplayName",
            AcceptUserEmail = "AcceptUserEmail",
            AcceptUserSource = "AcceptUserSource",
            AcceptUserLastDirectoryUpdate = "AcceptUserLastDirectoryUpdate",
            AcceptUserUserImage = "AcceptUserUserImage",
            AcceptUserInsertDate = "AcceptUserInsertDate",
            AcceptUserInsertUserId = "AcceptUserInsertUserId",
            AcceptUserUpdateDate = "AcceptUserUpdateDate",
            AcceptUserUpdateUserId = "AcceptUserUpdateUserId",
            AcceptUserIsActive = "AcceptUserIsActive"
        }
    }
}

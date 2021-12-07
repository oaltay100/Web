/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace LBYS.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace LBYS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace LBYS.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace LBYS.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace LBYS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace LBYS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace LBYS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace LBYS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace LBYS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace LBYS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace LBYS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace LBYS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace LBYS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace LBYS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace LBYS.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace LBYS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace LBYS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace LBYS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace LBYS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace LBYS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace LBYS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace LBYS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace LBYS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace LBYS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace LBYS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace LBYS.Lab {
    class AcceptColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface AcceptForm {
        SampleId: Serenity.IntegerEditor;
        Accept: Serenity.IntegerEditor;
        AcceptDate: Serenity.DateEditor;
        AcceptUserId: Serenity.IntegerEditor;
    }
    class AcceptForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface AcceptRow {
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
    namespace AcceptRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.Accept";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace AcceptService {
        const baseUrl = "Lab/Accept";
        function Create(request: Serenity.SaveRequest<AcceptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcceptRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcceptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcceptRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Accept/Create",
            Update = "Lab/Accept/Update",
            Delete = "Lab/Accept/Delete",
            Retrieve = "Lab/Accept/Retrieve",
            List = "Lab/Accept/List"
        }
    }
}
declare namespace LBYS.Lab {
    class AntibiogramColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface AntibiogramForm {
        BacteriumId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
    }
    class AntibiogramForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface AntibiogramRow {
        UseIdrId?: number;
        BacteriumId?: number;
        AssayId?: number;
        Result?: string;
        Description?: string;
        Hide?: boolean;
        BacteriumDetailId?: number;
        BacteriumAssayId?: number;
        BacteriumName?: string;
        BacteriumResult?: string;
        BacteriumDescriptionId?: number;
        BacteriumColony?: string;
        BacteriumType?: number;
        BacteriumInsertDate?: string;
        BacteriumInsertUserId?: number;
        BacteriumUpdateDate?: string;
        BacteriumUpdateUserId?: number;
        BacteriumIsActive?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace AntibiogramRow {
        const idProperty = "UseIdrId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Result";
        const localTextPrefix = "Lab.Antibiogram";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            UseIdrId = "UseIdrId",
            BacteriumId = "BacteriumId",
            AssayId = "AssayId",
            Result = "Result",
            Description = "Description",
            Hide = "Hide",
            BacteriumDetailId = "BacteriumDetailId",
            BacteriumAssayId = "BacteriumAssayId",
            BacteriumName = "BacteriumName",
            BacteriumResult = "BacteriumResult",
            BacteriumDescriptionId = "BacteriumDescriptionId",
            BacteriumColony = "BacteriumColony",
            BacteriumType = "BacteriumType",
            BacteriumInsertDate = "BacteriumInsertDate",
            BacteriumInsertUserId = "BacteriumInsertUserId",
            BacteriumUpdateDate = "BacteriumUpdateDate",
            BacteriumUpdateUserId = "BacteriumUpdateUserId",
            BacteriumIsActive = "BacteriumIsActive",
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
declare namespace LBYS.Lab {
    namespace AntibiogramService {
        const baseUrl = "Lab/Antibiogram";
        function Create(request: Serenity.SaveRequest<AntibiogramRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AntibiogramRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AntibiogramRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AntibiogramRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Antibiogram/Create",
            Update = "Lab/Antibiogram/Update",
            Delete = "Lab/Antibiogram/Delete",
            Retrieve = "Lab/Antibiogram/Retrieve",
            List = "Lab/Antibiogram/List"
        }
    }
}
declare namespace LBYS.Lab {
    class AssayColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface AssayForm {
        UnitId: Serenity.IntegerEditor;
        SutId: Serenity.IntegerEditor;
        ParentId: Serenity.IntegerEditor;
        Unit: Serenity.StringEditor;
        ResultType: Serenity.IntegerEditor;
        Sort: Serenity.IntegerEditor;
        Formula: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
        Method: Serenity.StringEditor;
        MelisId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Price2: Serenity.DecimalEditor;
        DefaultValue: Serenity.StringEditor;
    }
    class AssayForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    class AssayResultColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface AssayResultForm {
        AssayId: Serenity.IntegerEditor;
    }
    class AssayResultForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface AssayResultRow {
        Id?: number;
        AssayId?: number;
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
    }
    namespace AssayResultRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.AssayResult";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            AssayId = "AssayId",
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
            AssayIsActive = "AssayIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace AssayResultService {
        const baseUrl = "Lab/AssayResult";
        function Create(request: Serenity.SaveRequest<AssayResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssayResultRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssayResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssayResultRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/AssayResult/Create",
            Update = "Lab/AssayResult/Update",
            Delete = "Lab/AssayResult/Delete",
            Retrieve = "Lab/AssayResult/Retrieve",
            List = "Lab/AssayResult/List"
        }
    }
}
declare namespace LBYS.Lab {
    interface AssayRow {
        Id?: number;
        UnitId?: number;
        SutId?: number;
        ParentId?: number;
        Unit?: string;
        ResultType?: number;
        Sort?: number;
        Formula?: string;
        Hide?: boolean;
        Method?: string;
        MelisId?: number;
        Price?: number;
        Price2?: number;
        DefaultValue?: string;
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
        SutName?: string;
        SutCode?: string;
        SutLoinc?: string;
        SutPoint?: number;
        SutInsertDate?: string;
        SutInsertUserId?: number;
        SutUpdateDate?: string;
        SutUpdateUserId?: number;
        SutIsActive?: number;
        ParentUnitId?: number;
        ParentSutId?: number;
        ParentParentId?: number;
        ParentUnit?: string;
        ParentResultType?: number;
        ParentSort?: number;
        ParentFormula?: string;
        ParentHide?: boolean;
        ParentMethod?: string;
        ParentMelisId?: number;
        ParentPrice?: number;
        ParentPrice2?: number;
        ParentDefaultValue?: string;
        ParentInsertDate?: string;
        ParentInsertUserId?: number;
        ParentUpdateDate?: string;
        ParentUpdateUserId?: number;
        ParentIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace AssayRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Unit";
        const localTextPrefix = "Lab.Assay";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UnitId = "UnitId",
            SutId = "SutId",
            ParentId = "ParentId",
            Unit = "Unit",
            ResultType = "ResultType",
            Sort = "Sort",
            Formula = "Formula",
            Hide = "Hide",
            Method = "Method",
            MelisId = "MelisId",
            Price = "Price",
            Price2 = "Price2",
            DefaultValue = "DefaultValue",
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
            SutName = "SutName",
            SutCode = "SutCode",
            SutLoinc = "SutLoinc",
            SutPoint = "SutPoint",
            SutInsertDate = "SutInsertDate",
            SutInsertUserId = "SutInsertUserId",
            SutUpdateDate = "SutUpdateDate",
            SutUpdateUserId = "SutUpdateUserId",
            SutIsActive = "SutIsActive",
            ParentUnitId = "ParentUnitId",
            ParentSutId = "ParentSutId",
            ParentParentId = "ParentParentId",
            ParentUnit = "ParentUnit",
            ParentResultType = "ParentResultType",
            ParentSort = "ParentSort",
            ParentFormula = "ParentFormula",
            ParentHide = "ParentHide",
            ParentMethod = "ParentMethod",
            ParentMelisId = "ParentMelisId",
            ParentPrice = "ParentPrice",
            ParentPrice2 = "ParentPrice2",
            ParentDefaultValue = "ParentDefaultValue",
            ParentInsertDate = "ParentInsertDate",
            ParentInsertUserId = "ParentInsertUserId",
            ParentUpdateDate = "ParentUpdateDate",
            ParentUpdateUserId = "ParentUpdateUserId",
            ParentIsActive = "ParentIsActive",
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
declare namespace LBYS.Lab {
    namespace AssayService {
        const baseUrl = "Lab/Assay";
        function Create(request: Serenity.SaveRequest<AssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Assay/Create",
            Update = "Lab/Assay/Update",
            Delete = "Lab/Assay/Delete",
            Retrieve = "Lab/Assay/Retrieve",
            List = "Lab/Assay/List"
        }
    }
}
declare namespace LBYS.Lab {
    class BacteriumColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface BacteriumForm {
        DetailId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        DescriptionId: Serenity.IntegerEditor;
        Colony: Serenity.StringEditor;
        Type: Serenity.IntegerEditor;
    }
    class BacteriumForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface BacteriumRow {
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
    namespace BacteriumRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Bacterium";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace BacteriumService {
        const baseUrl = "Lab/Bacterium";
        function Create(request: Serenity.SaveRequest<BacteriumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BacteriumRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BacteriumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BacteriumRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Bacterium/Create",
            Update = "Lab/Bacterium/Update",
            Delete = "Lab/Bacterium/Delete",
            Retrieve = "Lab/Bacterium/Retrieve",
            List = "Lab/Bacterium/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ChangeColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ChangeForm {
        DetailId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
    }
    class ChangeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ChangeRow {
        Id?: number;
        DetailId?: number;
        Result?: string;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ChangeRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Result";
        const localTextPrefix = "Lab.Change";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            DetailId = "DetailId",
            Result = "Result",
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
declare namespace LBYS.Lab {
    namespace ChangeService {
        const baseUrl = "Lab/Change";
        function Create(request: Serenity.SaveRequest<ChangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ChangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Change/Create",
            Update = "Lab/Change/Update",
            Delete = "Lab/Change/Delete",
            Retrieve = "Lab/Change/Retrieve",
            List = "Lab/Change/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ClaimColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ClaimForm {
        LaboratoryId: Serenity.IntegerEditor;
        RecordDate: Serenity.DateEditor;
        InstitutionId: Serenity.IntegerEditor;
        PatientId: Serenity.IntegerEditor;
        ClaimType: Serenity.IntegerEditor;
        Priorty: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        InvoiceId: Serenity.IntegerEditor;
        PaymentType: Serenity.IntegerEditor;
        PaymentStatus: Serenity.BooleanEditor;
        Fee: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
    }
    class ClaimForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ClaimRow {
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
    namespace ClaimRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Lab.Claim";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace ClaimService {
        const baseUrl = "Lab/Claim";
        function Create(request: Serenity.SaveRequest<ClaimRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ClaimRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ClaimRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ClaimRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Claim/Create",
            Update = "Lab/Claim/Update",
            Delete = "Lab/Claim/Delete",
            Retrieve = "Lab/Claim/Retrieve",
            List = "Lab/Claim/List"
        }
    }
}
declare namespace LBYS.Lab {
    class CodeColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface CodeForm {
        AssayId: Serenity.IntegerEditor;
        DeviceId: Serenity.IntegerEditor;
        Code: Serenity.StringEditor;
        Factor: Serenity.DecimalEditor;
        Digit: Serenity.IntegerEditor;
        Direction: Serenity.BooleanEditor;
    }
    class CodeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface CodeRow {
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
    namespace CodeRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Code";
        const localTextPrefix = "Lab.Code";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace CodeService {
        const baseUrl = "Lab/Code";
        function Create(request: Serenity.SaveRequest<CodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Code/Create",
            Update = "Lab/Code/Update",
            Delete = "Lab/Code/Delete",
            Retrieve = "Lab/Code/Retrieve",
            List = "Lab/Code/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ControlColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ControlForm {
        LevelsId: Serenity.IntegerEditor;
        RecordDate: Serenity.DateEditor;
        Result: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ControlForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ControlRow {
        Id?: number;
        LevelsId?: number;
        RecordDate?: string;
        Result?: string;
        Description?: string;
        LevelsCodeId?: number;
        LevelsName?: string;
        LevelsLow?: number;
        LevelsHigh?: number;
        LevelsLot?: string;
        LevelsHide?: boolean;
        LevelsInsertDate?: string;
        LevelsInsertUserId?: number;
        LevelsUpdateDate?: string;
        LevelsUpdateUserId?: number;
        LevelsIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ControlRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Result";
        const localTextPrefix = "Lab.Control";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LevelsId = "LevelsId",
            RecordDate = "RecordDate",
            Result = "Result",
            Description = "Description",
            LevelsCodeId = "LevelsCodeId",
            LevelsName = "LevelsName",
            LevelsLow = "LevelsLow",
            LevelsHigh = "LevelsHigh",
            LevelsLot = "LevelsLot",
            LevelsHide = "LevelsHide",
            LevelsInsertDate = "LevelsInsertDate",
            LevelsInsertUserId = "LevelsInsertUserId",
            LevelsUpdateDate = "LevelsUpdateDate",
            LevelsUpdateUserId = "LevelsUpdateUserId",
            LevelsIsActive = "LevelsIsActive",
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
declare namespace LBYS.Lab {
    namespace ControlService {
        const baseUrl = "Lab/Control";
        function Create(request: Serenity.SaveRequest<ControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ControlRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ControlRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Control/Create",
            Update = "Lab/Control/Update",
            Delete = "Lab/Control/Delete",
            Retrieve = "Lab/Control/Retrieve",
            List = "Lab/Control/List"
        }
    }
}
declare namespace LBYS.Lab {
    class DescriptionColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface DescriptionForm {
        Type: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }
    class DescriptionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface DescriptionRow {
        Id?: number;
        Type?: number;
        Description?: string;
        Code?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace DescriptionRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Lab.Description";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Type = "Type",
            Description = "Description",
            Code = "Code",
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
declare namespace LBYS.Lab {
    namespace DescriptionService {
        const baseUrl = "Lab/Description";
        function Create(request: Serenity.SaveRequest<DescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Description/Create",
            Update = "Lab/Description/Update",
            Delete = "Lab/Description/Delete",
            Retrieve = "Lab/Description/Retrieve",
            List = "Lab/Description/List"
        }
    }
}
declare namespace LBYS.Lab {
    class DetailColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface DetailForm {
        SampleId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        ParentId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
        ResultDate: Serenity.DateEditor;
        ResultUserId: Serenity.IntegerEditor;
        DeviceId: Serenity.IntegerEditor;
        DeviceDate: Serenity.DateEditor;
        DescriptionId: Serenity.IntegerEditor;
        Picture: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        NLow: Serenity.DecimalEditor;
        NHigh: Serenity.DecimalEditor;
        PLow: Serenity.DecimalEditor;
        PHigh: Serenity.DecimalEditor;
        Special: Serenity.StringEditor;
        Importance: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        InstitutionId: Serenity.IntegerEditor;
    }
    class DetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface DetailRow {
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
    namespace DetailRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Result";
        const localTextPrefix = "Lab.Detail";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace DetailService {
        const baseUrl = "Lab/Detail";
        function Create(request: Serenity.SaveRequest<DetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Detail/Create",
            Update = "Lab/Detail/Update",
            Delete = "Lab/Detail/Delete",
            Retrieve = "Lab/Detail/Retrieve",
            List = "Lab/Detail/List"
        }
    }
}
declare namespace LBYS.Lab {
    class DeviceColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface DeviceForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Ip: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Port: Serenity.StringEditor;
        Boudrate: Serenity.IntegerEditor;
        Databits: Serenity.IntegerEditor;
        Stopbits: Serenity.IntegerEditor;
        Parity: Serenity.IntegerEditor;
        Handshake: Serenity.IntegerEditor;
        Dtr: Serenity.BooleanEditor;
        Rts: Serenity.BooleanEditor;
    }
    class DeviceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface DeviceRow {
        Id?: number;
        LaboratoryId?: number;
        Type?: number;
        Name?: string;
        Ip?: string;
        Host?: string;
        Port?: string;
        Boudrate?: number;
        Databits?: number;
        Stopbits?: number;
        Parity?: number;
        Handshake?: number;
        Dtr?: boolean;
        Rts?: boolean;
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
    namespace DeviceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Device";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            Type = "Type",
            Name = "Name",
            Ip = "Ip",
            Host = "Host",
            Port = "Port",
            Boudrate = "Boudrate",
            Databits = "Databits",
            Stopbits = "Stopbits",
            Parity = "Parity",
            Handshake = "Handshake",
            Dtr = "Dtr",
            Rts = "Rts",
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
declare namespace LBYS.Lab {
    namespace DeviceService {
        const baseUrl = "Lab/Device";
        function Create(request: Serenity.SaveRequest<DeviceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DeviceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DeviceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DeviceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Device/Create",
            Update = "Lab/Device/Update",
            Delete = "Lab/Device/Delete",
            Retrieve = "Lab/Device/Retrieve",
            List = "Lab/Device/List"
        }
    }
}
declare namespace LBYS.Lab {
    class DoctorColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface DoctorForm {
        LaboratoryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        IdNumber: Serenity.StringEditor;
        RegistrationNumber: Serenity.StringEditor;
        Gender: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Task: Serenity.IntegerEditor;
        Appellation: Serenity.IntegerEditor;
    }
    class DoctorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface DoctorRow {
        Id?: number;
        LaboratoryId?: number;
        Name?: string;
        IdNumber?: string;
        RegistrationNumber?: string;
        Gender?: number;
        Phone?: string;
        EMail?: string;
        Address?: string;
        Task?: number;
        Appellation?: number;
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
    namespace DoctorRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Doctor";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            Name = "Name",
            IdNumber = "IdNumber",
            RegistrationNumber = "RegistrationNumber",
            Gender = "Gender",
            Phone = "Phone",
            EMail = "EMail",
            Address = "Address",
            Task = "Task",
            Appellation = "Appellation",
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
declare namespace LBYS.Lab {
    namespace DoctorService {
        const baseUrl = "Lab/Doctor";
        function Create(request: Serenity.SaveRequest<DoctorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DoctorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DoctorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DoctorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Doctor/Create",
            Update = "Lab/Doctor/Update",
            Delete = "Lab/Doctor/Delete",
            Retrieve = "Lab/Doctor/Retrieve",
            List = "Lab/Doctor/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ImageColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ImageForm {
        DetailId: Serenity.IntegerEditor;
        Path: Serenity.StringEditor;
        StudyUid: Serenity.StringEditor;
        SeriUid: Serenity.StringEditor;
        ImageUid: Serenity.StringEditor;
    }
    class ImageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ImageRow {
        Id?: number;
        DetailId?: number;
        Path?: string;
        StudyUid?: string;
        SeriUid?: string;
        ImageUid?: string;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ImageRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Path";
        const localTextPrefix = "Lab.Image";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            DetailId = "DetailId",
            Path = "Path",
            StudyUid = "StudyUid",
            SeriUid = "SeriUid",
            ImageUid = "ImageUid",
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
declare namespace LBYS.Lab {
    namespace ImageService {
        const baseUrl = "Lab/Image";
        function Create(request: Serenity.SaveRequest<ImageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Image/Create",
            Update = "Lab/Image/Update",
            Delete = "Lab/Image/Delete",
            Retrieve = "Lab/Image/Retrieve",
            List = "Lab/Image/List"
        }
    }
}
declare namespace LBYS.Lab {
    class IndustryColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface IndustryForm {
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }
    class IndustryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface IndustryRow {
        Id?: number;
        Name?: string;
        Phone?: string;
        Address?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace IndustryRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Industry";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Phone = "Phone",
            Address = "Address",
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
declare namespace LBYS.Lab {
    namespace IndustryService {
        const baseUrl = "Lab/Industry";
        function Create(request: Serenity.SaveRequest<IndustryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<IndustryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IndustryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IndustryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Industry/Create",
            Update = "Lab/Industry/Update",
            Delete = "Lab/Industry/Delete",
            Retrieve = "Lab/Industry/Retrieve",
            List = "Lab/Industry/List"
        }
    }
}
declare namespace LBYS.Lab {
    class InstitutionColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    class InstitutionDoctorColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface InstitutionDoctorForm {
        InstitutionId: Serenity.IntegerEditor;
        DoctorId: Serenity.IntegerEditor;
    }
    class InstitutionDoctorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface InstitutionDoctorRow {
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
    namespace InstitutionDoctorRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.InstitutionDoctor";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace InstitutionDoctorService {
        const baseUrl = "Lab/InstitutionDoctor";
        function Create(request: Serenity.SaveRequest<InstitutionDoctorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstitutionDoctorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstitutionDoctorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstitutionDoctorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/InstitutionDoctor/Create",
            Update = "Lab/InstitutionDoctor/Update",
            Delete = "Lab/InstitutionDoctor/Delete",
            Retrieve = "Lab/InstitutionDoctor/Retrieve",
            List = "Lab/InstitutionDoctor/List"
        }
    }
}
declare namespace LBYS.Lab {
    interface InstitutionForm {
        LaboratoryId: Serenity.IntegerEditor;
        IndustryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        PaymentType: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        PriceType: Serenity.IntegerEditor;
        IsExternal: Serenity.BooleanEditor;
        Symbol: Serenity.StringEditor;
    }
    class InstitutionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelAssayColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface InstitutionPanelAssayForm {
        InstitutionPanelId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
    }
    class InstitutionPanelAssayForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface InstitutionPanelAssayRow {
        Id?: number;
        InstitutionPanelId?: number;
        AssayId?: number;
        Price?: number;
        InstitutionPanelInstitutionId?: number;
        InstitutionPanelClaimType?: number;
        InstitutionPanelName?: string;
        InstitutionPanelPaymentType?: number;
        InstitutionPanelInsertDate?: string;
        InstitutionPanelInsertUserId?: number;
        InstitutionPanelUpdateDate?: string;
        InstitutionPanelUpdateUserId?: number;
        InstitutionPanelIsActive?: number;
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
    }
    namespace InstitutionPanelAssayRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.InstitutionPanelAssay";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            InstitutionPanelId = "InstitutionPanelId",
            AssayId = "AssayId",
            Price = "Price",
            InstitutionPanelInstitutionId = "InstitutionPanelInstitutionId",
            InstitutionPanelClaimType = "InstitutionPanelClaimType",
            InstitutionPanelName = "InstitutionPanelName",
            InstitutionPanelPaymentType = "InstitutionPanelPaymentType",
            InstitutionPanelInsertDate = "InstitutionPanelInsertDate",
            InstitutionPanelInsertUserId = "InstitutionPanelInsertUserId",
            InstitutionPanelUpdateDate = "InstitutionPanelUpdateDate",
            InstitutionPanelUpdateUserId = "InstitutionPanelUpdateUserId",
            InstitutionPanelIsActive = "InstitutionPanelIsActive",
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
            AssayIsActive = "AssayIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace InstitutionPanelAssayService {
        const baseUrl = "Lab/InstitutionPanelAssay";
        function Create(request: Serenity.SaveRequest<InstitutionPanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstitutionPanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstitutionPanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstitutionPanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/InstitutionPanelAssay/Create",
            Update = "Lab/InstitutionPanelAssay/Update",
            Delete = "Lab/InstitutionPanelAssay/Delete",
            Retrieve = "Lab/InstitutionPanelAssay/Retrieve",
            List = "Lab/InstitutionPanelAssay/List"
        }
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface InstitutionPanelForm {
        InstitutionId: Serenity.IntegerEditor;
        ClaimType: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        PaymentType: Serenity.IntegerEditor;
    }
    class InstitutionPanelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface InstitutionPanelRow {
        Id?: number;
        InstitutionId?: number;
        ClaimType?: number;
        Name?: string;
        PaymentType?: number;
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
    namespace InstitutionPanelRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.InstitutionPanel";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            InstitutionId = "InstitutionId",
            ClaimType = "ClaimType",
            Name = "Name",
            PaymentType = "PaymentType",
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
declare namespace LBYS.Lab {
    namespace InstitutionPanelService {
        const baseUrl = "Lab/InstitutionPanel";
        function Create(request: Serenity.SaveRequest<InstitutionPanelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstitutionPanelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstitutionPanelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstitutionPanelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/InstitutionPanel/Create",
            Update = "Lab/InstitutionPanel/Update",
            Delete = "Lab/InstitutionPanel/Delete",
            Retrieve = "Lab/InstitutionPanel/Retrieve",
            List = "Lab/InstitutionPanel/List"
        }
    }
}
declare namespace LBYS.Lab {
    interface InstitutionRow {
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
    namespace InstitutionRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Institution";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace InstitutionService {
        const baseUrl = "Lab/Institution";
        function Create(request: Serenity.SaveRequest<InstitutionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InstitutionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstitutionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstitutionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Institution/Create",
            Update = "Lab/Institution/Update",
            Delete = "Lab/Institution/Delete",
            Retrieve = "Lab/Institution/Retrieve",
            List = "Lab/Institution/List"
        }
    }
}
declare namespace LBYS.Lab {
    class InvoiceColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface InvoiceForm {
        LaboratoryId: Serenity.IntegerEditor;
        InstitutionId: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        Number: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Prite: Serenity.DecimalEditor;
        Counts: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
    }
    class InvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface InvoiceRow {
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
    namespace InvoiceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Lab.Invoice";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace InvoiceService {
        const baseUrl = "Lab/Invoice";
        function Create(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Invoice/Create",
            Update = "Lab/Invoice/Update",
            Delete = "Lab/Invoice/Delete",
            Retrieve = "Lab/Invoice/Retrieve",
            List = "Lab/Invoice/List"
        }
    }
}
declare namespace LBYS.Lab {
    class LaboratoryColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface LaboratoryForm {
        Name: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Mernis: Serenity.StringEditor;
        Institution: Serenity.StringEditor;
        SrvMelis: Serenity.BooleanEditor;
        SrvENabiz: Serenity.BooleanEditor;
        SrvCovid: Serenity.BooleanEditor;
        IsPaymentMandatory: Serenity.BooleanEditor;
        IsAcceptrequired: Serenity.BooleanEditor;
        IsDoNotReprint: Serenity.BooleanEditor;
    }
    class LaboratoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface LaboratoryRow {
        Id?: number;
        Name?: string;
        Logo?: string;
        Phone?: string;
        Fax?: string;
        EMail?: string;
        Address?: string;
        Mernis?: string;
        Institution?: string;
        SrvMelis?: boolean;
        SrvENabiz?: boolean;
        SrvCovid?: boolean;
        IsPaymentMandatory?: boolean;
        IsAcceptrequired?: boolean;
        IsDoNotReprint?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace LaboratoryRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Laboratory";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Logo = "Logo",
            Phone = "Phone",
            Fax = "Fax",
            EMail = "EMail",
            Address = "Address",
            Mernis = "Mernis",
            Institution = "Institution",
            SrvMelis = "SrvMelis",
            SrvENabiz = "SrvENabiz",
            SrvCovid = "SrvCovid",
            IsPaymentMandatory = "IsPaymentMandatory",
            IsAcceptrequired = "IsAcceptrequired",
            IsDoNotReprint = "IsDoNotReprint",
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
declare namespace LBYS.Lab {
    namespace LaboratoryService {
        const baseUrl = "Lab/Laboratory";
        function Create(request: Serenity.SaveRequest<LaboratoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LaboratoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LaboratoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LaboratoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Laboratory/Create",
            Update = "Lab/Laboratory/Update",
            Delete = "Lab/Laboratory/Delete",
            Retrieve = "Lab/Laboratory/Retrieve",
            List = "Lab/Laboratory/List"
        }
    }
}
declare namespace LBYS.Lab {
    class LekColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface LekForm {
        UnitId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Lek: Serenity.IntegerEditor;
        Warning: Serenity.IntegerEditor;
        Error: Serenity.IntegerEditor;
    }
    class LekForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface LekRow {
        Id?: number;
        UnitId?: number;
        Type?: number;
        Lek?: number;
        Warning?: number;
        Error?: number;
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
    namespace LekRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Lab.Lek";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UnitId = "UnitId",
            Type = "Type",
            Lek = "Lek",
            Warning = "Warning",
            Error = "Error",
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
declare namespace LBYS.Lab {
    namespace LekService {
        const baseUrl = "Lab/Lek";
        function Create(request: Serenity.SaveRequest<LekRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LekRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LekRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LekRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Lek/Create",
            Update = "Lab/Lek/Update",
            Delete = "Lab/Lek/Delete",
            Retrieve = "Lab/Lek/Retrieve",
            List = "Lab/Lek/List"
        }
    }
}
declare namespace LBYS.Lab {
    class LevelsColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface LevelsForm {
        CodeId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Low: Serenity.DecimalEditor;
        High: Serenity.DecimalEditor;
        Lot: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
    }
    class LevelsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface LevelsRow {
        Id?: number;
        CodeId?: number;
        Name?: string;
        Low?: number;
        High?: number;
        Lot?: string;
        Hide?: boolean;
        CodeAssayId?: number;
        CodeDeviceId?: number;
        Code?: string;
        CodeFactor?: number;
        CodeDigit?: number;
        CodeDirection?: boolean;
        CodeInsertDate?: string;
        CodeInsertUserId?: number;
        CodeUpdateDate?: string;
        CodeUpdateUserId?: number;
        CodeIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace LevelsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Levels";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            CodeId = "CodeId",
            Name = "Name",
            Low = "Low",
            High = "High",
            Lot = "Lot",
            Hide = "Hide",
            CodeAssayId = "CodeAssayId",
            CodeDeviceId = "CodeDeviceId",
            Code = "Code",
            CodeFactor = "CodeFactor",
            CodeDigit = "CodeDigit",
            CodeDirection = "CodeDirection",
            CodeInsertDate = "CodeInsertDate",
            CodeInsertUserId = "CodeInsertUserId",
            CodeUpdateDate = "CodeUpdateDate",
            CodeUpdateUserId = "CodeUpdateUserId",
            CodeIsActive = "CodeIsActive",
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
declare namespace LBYS.Lab {
    namespace LevelsService {
        const baseUrl = "Lab/Levels";
        function Create(request: Serenity.SaveRequest<LevelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LevelsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LevelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LevelsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Levels/Create",
            Update = "Lab/Levels/Update",
            Delete = "Lab/Levels/Delete",
            Retrieve = "Lab/Levels/Retrieve",
            List = "Lab/Levels/List"
        }
    }
}
declare namespace LBYS.Lab {
    class MaterialColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface MaterialForm {
        Name: Serenity.StringEditor;
    }
    class MaterialForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface MaterialRow {
        Id?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace MaterialRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Material";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Name = "Name",
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
declare namespace LBYS.Lab {
    namespace MaterialService {
        const baseUrl = "Lab/Material";
        function Create(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Material/Create",
            Update = "Lab/Material/Update",
            Delete = "Lab/Material/Delete",
            Retrieve = "Lab/Material/Retrieve",
            List = "Lab/Material/List"
        }
    }
}
declare namespace LBYS.Lab {
    class NotificationColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface NotificationForm {
        UserId: Serenity.IntegerEditor;
        Message: Serenity.StringEditor;
    }
    class NotificationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface NotificationRow {
        Id?: number;
        UserId?: number;
        Message?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace NotificationRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Message";
        const localTextPrefix = "Lab.Notification";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            Message = "Message",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
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
declare namespace LBYS.Lab {
    namespace NotificationService {
        const baseUrl = "Lab/Notification";
        function Create(request: Serenity.SaveRequest<NotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Notification/Create",
            Update = "Lab/Notification/Update",
            Delete = "Lab/Notification/Delete",
            Retrieve = "Lab/Notification/Retrieve",
            List = "Lab/Notification/List"
        }
    }
}
declare namespace LBYS.Lab {
    class PanelAssayColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface PanelAssayForm {
        PanelId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
    }
    class PanelAssayForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface PanelAssayRow {
        Id?: number;
        PanelId?: number;
        AssayId?: number;
        PanelLaboratoryId?: number;
        PanelName?: string;
        PanelPrice?: number;
        PanelInsertDate?: string;
        PanelInsertUserId?: number;
        PanelUpdateDate?: string;
        PanelUpdateUserId?: number;
        PanelIsActive?: number;
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
    }
    namespace PanelAssayRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.PanelAssay";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            PanelId = "PanelId",
            AssayId = "AssayId",
            PanelLaboratoryId = "PanelLaboratoryId",
            PanelName = "PanelName",
            PanelPrice = "PanelPrice",
            PanelInsertDate = "PanelInsertDate",
            PanelInsertUserId = "PanelInsertUserId",
            PanelUpdateDate = "PanelUpdateDate",
            PanelUpdateUserId = "PanelUpdateUserId",
            PanelIsActive = "PanelIsActive",
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
            AssayIsActive = "AssayIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace PanelAssayService {
        const baseUrl = "Lab/PanelAssay";
        function Create(request: Serenity.SaveRequest<PanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/PanelAssay/Create",
            Update = "Lab/PanelAssay/Update",
            Delete = "Lab/PanelAssay/Delete",
            Retrieve = "Lab/PanelAssay/Retrieve",
            List = "Lab/PanelAssay/List"
        }
    }
}
declare namespace LBYS.Lab {
    class PanelColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface PanelForm {
        LaboratoryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }
    class PanelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface PanelRow {
        Id?: number;
        LaboratoryId?: number;
        Name?: string;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PanelRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Panel";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            Name = "Name",
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
declare namespace LBYS.Lab {
    namespace PanelService {
        const baseUrl = "Lab/Panel";
        function Create(request: Serenity.SaveRequest<PanelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PanelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PanelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PanelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Panel/Create",
            Update = "Lab/Panel/Update",
            Delete = "Lab/Panel/Delete",
            Retrieve = "Lab/Panel/Retrieve",
            List = "Lab/Panel/List"
        }
    }
}
declare namespace LBYS.Lab {
    class PatientColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface PatientForm {
        Name: Serenity.StringEditor;
        IdNumber: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        MotherName: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Place: Serenity.StringEditor;
        BloodGroup: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }
    class PatientForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface PatientRow {
        Id?: number;
        Name?: string;
        IdNumber?: string;
        FatherName?: string;
        MotherName?: string;
        Birthdate?: string;
        Place?: string;
        BloodGroup?: number;
        Phone?: string;
        EMail?: string;
        Address?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PatientRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Patient";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            IdNumber = "IdNumber",
            FatherName = "FatherName",
            MotherName = "MotherName",
            Birthdate = "Birthdate",
            Place = "Place",
            BloodGroup = "BloodGroup",
            Phone = "Phone",
            EMail = "EMail",
            Address = "Address",
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
declare namespace LBYS.Lab {
    namespace PatientService {
        const baseUrl = "Lab/Patient";
        function Create(request: Serenity.SaveRequest<PatientRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PatientRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Patient/Create",
            Update = "Lab/Patient/Update",
            Delete = "Lab/Patient/Delete",
            Retrieve = "Lab/Patient/Retrieve",
            List = "Lab/Patient/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ReferenceColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ReferenceForm {
        AssayId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Gender: Serenity.IntegerEditor;
        Age: Serenity.IntegerEditor;
        Start: Serenity.IntegerEditor;
        Finish: Serenity.IntegerEditor;
        Low: Serenity.DecimalEditor;
        High: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
    }
    class ReferenceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ReferenceRow {
        Id?: number;
        AssayId?: number;
        Type?: number;
        Gender?: number;
        Age?: number;
        Start?: number;
        Finish?: number;
        Low?: number;
        High?: number;
        Description?: string;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ReferenceRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Lab.Reference";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            AssayId = "AssayId",
            Type = "Type",
            Gender = "Gender",
            Age = "Age",
            Start = "Start",
            Finish = "Finish",
            Low = "Low",
            High = "High",
            Description = "Description",
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
declare namespace LBYS.Lab {
    namespace ReferenceService {
        const baseUrl = "Lab/Reference";
        function Create(request: Serenity.SaveRequest<ReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReferenceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReferenceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReferenceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Reference/Create",
            Update = "Lab/Reference/Update",
            Delete = "Lab/Reference/Delete",
            Retrieve = "Lab/Reference/Retrieve",
            List = "Lab/Reference/List"
        }
    }
}
declare namespace LBYS.Lab {
    class ReportColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface ReportForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Report: Serenity.StringEditor;
    }
    class ReportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface ReportRow {
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
    namespace ReportRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Report";
        const localTextPrefix = "Lab.Report";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace ReportService {
        const baseUrl = "Lab/Report";
        function Create(request: Serenity.SaveRequest<ReportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReportRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Report/Create",
            Update = "Lab/Report/Update",
            Delete = "Lab/Report/Delete",
            Retrieve = "Lab/Report/Retrieve",
            List = "Lab/Report/List"
        }
    }
}
declare namespace LBYS.Lab {
    class SampleColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface SampleForm {
        ClaimId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
        Barcode: Serenity.IntegerEditor;
        Rack: Serenity.StringEditor;
    }
    class SampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface SampleRow {
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
    namespace SampleRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Rack";
        const localTextPrefix = "Lab.Sample";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
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
declare namespace LBYS.Lab {
    namespace SampleService {
        const baseUrl = "Lab/Sample";
        function Create(request: Serenity.SaveRequest<SampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Sample/Create",
            Update = "Lab/Sample/Update",
            Delete = "Lab/Sample/Delete",
            Retrieve = "Lab/Sample/Retrieve",
            List = "Lab/Sample/List"
        }
    }
}
declare namespace LBYS.Lab {
    class SutColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface SutForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Loinc: Serenity.StringEditor;
        Point: Serenity.DecimalEditor;
    }
    class SutForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface SutRow {
        Id?: number;
        Name?: string;
        Code?: string;
        Loinc?: string;
        Point?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace SutRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Sut";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Code = "Code",
            Loinc = "Loinc",
            Point = "Point",
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
declare namespace LBYS.Lab {
    namespace SutService {
        const baseUrl = "Lab/Sut";
        function Create(request: Serenity.SaveRequest<SutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SutRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SutRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Sut/Create",
            Update = "Lab/Sut/Update",
            Delete = "Lab/Sut/Delete",
            Retrieve = "Lab/Sut/Retrieve",
            List = "Lab/Sut/List"
        }
    }
}
declare namespace LBYS.Lab {
    class TemplateColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface TemplateForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        BgColor: Serenity.StringEditor;
        Color: Serenity.StringEditor;
    }
    class TemplateForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface TemplateRow {
        Id?: number;
        LaboratoryId?: number;
        Type?: number;
        BgColor?: string;
        Color?: string;
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
    namespace TemplateRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "BgColor";
        const localTextPrefix = "Lab.Template";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            Type = "Type",
            BgColor = "BgColor",
            Color = "Color",
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
declare namespace LBYS.Lab {
    namespace TemplateService {
        const baseUrl = "Lab/Template";
        function Create(request: Serenity.SaveRequest<TemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TemplateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TemplateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Template/Create",
            Update = "Lab/Template/Update",
            Delete = "Lab/Template/Delete",
            Retrieve = "Lab/Template/Retrieve",
            List = "Lab/Template/List"
        }
    }
}
declare namespace LBYS.Lab {
    class TubeColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface TubeForm {
        MaterialId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Bar: Serenity.IntegerEditor;
    }
    class TubeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface TubeRow {
        Id?: number;
        MaterialId?: number;
        Name?: string;
        Bar?: number;
        MaterialName?: string;
        MaterialInsertDate?: string;
        MaterialInsertUserId?: number;
        MaterialUpdateDate?: string;
        MaterialUpdateUserId?: number;
        MaterialIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace TubeRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Tube";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            MaterialId = "MaterialId",
            Name = "Name",
            Bar = "Bar",
            MaterialName = "MaterialName",
            MaterialInsertDate = "MaterialInsertDate",
            MaterialInsertUserId = "MaterialInsertUserId",
            MaterialUpdateDate = "MaterialUpdateDate",
            MaterialUpdateUserId = "MaterialUpdateUserId",
            MaterialIsActive = "MaterialIsActive",
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
declare namespace LBYS.Lab {
    namespace TubeService {
        const baseUrl = "Lab/Tube";
        function Create(request: Serenity.SaveRequest<TubeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TubeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TubeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TubeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Tube/Create",
            Update = "Lab/Tube/Update",
            Delete = "Lab/Tube/Delete",
            Retrieve = "Lab/Tube/Retrieve",
            List = "Lab/Tube/List"
        }
    }
}
declare namespace LBYS.Lab {
    class UnitColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface UnitForm {
        LaboratoryId: Serenity.IntegerEditor;
        TubeId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Sort: Serenity.IntegerEditor;
        TimetoResults: Serenity.IntegerEditor;
        IsAssayBarcode: Serenity.BooleanEditor;
    }
    class UnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface UnitRow {
        Id?: number;
        LaboratoryId?: number;
        TubeId?: number;
        Type?: number;
        Name?: string;
        Sort?: number;
        TimetoResults?: number;
        IsAssayBarcode?: boolean;
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
        TubeMaterialId?: number;
        TubeName?: string;
        TubeBar?: number;
        TubeInsertDate?: string;
        TubeInsertUserId?: number;
        TubeUpdateDate?: string;
        TubeUpdateUserId?: number;
        TubeIsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace UnitRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Lab.Unit";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            LaboratoryId = "LaboratoryId",
            TubeId = "TubeId",
            Type = "Type",
            Name = "Name",
            Sort = "Sort",
            TimetoResults = "TimetoResults",
            IsAssayBarcode = "IsAssayBarcode",
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
            TubeMaterialId = "TubeMaterialId",
            TubeName = "TubeName",
            TubeBar = "TubeBar",
            TubeInsertDate = "TubeInsertDate",
            TubeInsertUserId = "TubeInsertUserId",
            TubeUpdateDate = "TubeUpdateDate",
            TubeUpdateUserId = "TubeUpdateUserId",
            TubeIsActive = "TubeIsActive",
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
declare namespace LBYS.Lab {
    namespace UnitService {
        const baseUrl = "Lab/Unit";
        function Create(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/Unit/Create",
            Update = "Lab/Unit/Update",
            Delete = "Lab/Unit/Delete",
            Retrieve = "Lab/Unit/Retrieve",
            List = "Lab/Unit/List"
        }
    }
}
declare namespace LBYS.Lab {
    class UserInstitutionColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface UserInstitutionForm {
        UserId: Serenity.IntegerEditor;
        InstitutionId: Serenity.IntegerEditor;
    }
    class UserInstitutionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface UserInstitutionRow {
        Id?: number;
        UserId?: number;
        InstitutionId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
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
    }
    namespace UserInstitutionRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.UserInstitution";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            InstitutionId = "InstitutionId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
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
            InstitutionIsActive = "InstitutionIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace UserInstitutionService {
        const baseUrl = "Lab/UserInstitution";
        function Create(request: Serenity.SaveRequest<UserInstitutionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserInstitutionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserInstitutionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserInstitutionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/UserInstitution/Create",
            Update = "Lab/UserInstitution/Update",
            Delete = "Lab/UserInstitution/Delete",
            Retrieve = "Lab/UserInstitution/Retrieve",
            List = "Lab/UserInstitution/List"
        }
    }
}
declare namespace LBYS.Lab {
    class UserLaboratoryColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface UserLaboratoryForm {
        UserId: Serenity.IntegerEditor;
        LaboratoryId: Serenity.IntegerEditor;
    }
    class UserLaboratoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface UserLaboratoryRow {
        Id?: number;
        UserId?: number;
        LaboratoryId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
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
    }
    namespace UserLaboratoryRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.UserLaboratory";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            LaboratoryId = "LaboratoryId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
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
            LaboratoryIsActive = "LaboratoryIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace UserLaboratoryService {
        const baseUrl = "Lab/UserLaboratory";
        function Create(request: Serenity.SaveRequest<UserLaboratoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserLaboratoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserLaboratoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserLaboratoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/UserLaboratory/Create",
            Update = "Lab/UserLaboratory/Update",
            Delete = "Lab/UserLaboratory/Delete",
            Retrieve = "Lab/UserLaboratory/Retrieve",
            List = "Lab/UserLaboratory/List"
        }
    }
}
declare namespace LBYS.Lab {
    class UserUnitColumns {
        static columnsKey: string;
    }
}
declare namespace LBYS.Lab {
    interface UserUnitForm {
        UserId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
    }
    class UserUnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Lab {
    interface UserUnitRow {
        Id?: number;
        UserId?: number;
        UnitId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
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
    }
    namespace UserUnitRow {
        const idProperty = "Id";
        const localTextPrefix = "Lab.UserUnit";
        const deletePermission = "?";
        const insertPermission = "?";
        const readPermission = "?";
        const updatePermission = "?";
        const enum Fields {
            Id = "Id",
            UserId = "UserId",
            UnitId = "UnitId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
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
            UnitIsActive = "UnitIsActive"
        }
    }
}
declare namespace LBYS.Lab {
    namespace UserUnitService {
        const baseUrl = "Lab/UserUnit";
        function Create(request: Serenity.SaveRequest<UserUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserUnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserUnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Lab/UserUnit/Create",
            Update = "Lab/UserUnit/Update",
            Delete = "Lab/UserUnit/Delete",
            Retrieve = "Lab/UserUnit/Retrieve",
            List = "Lab/UserUnit/List"
        }
    }
}
declare namespace LBYS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace LBYS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace LBYS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace LBYS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace LBYS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace LBYS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace LBYS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace LBYS.Texts {
}
declare namespace LBYS {
    class SelectableGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace LBYS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace LBYS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace LBYS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace LBYS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace LBYS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace LBYS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace LBYS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace LBYS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace LBYS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace LBYS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace LBYS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace LBYS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace LBYS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace LBYS.LanguageList {
    function getValue(): string[][];
}
declare namespace LBYS.ScriptInitialization {
}
declare namespace LBYS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace LBYS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace LBYS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace LBYS.Lab {
    class IdFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace LBYS.Lab {
    class AcceptDialog extends Serenity.EntityDialog<AcceptRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AcceptForm;
    }
}
declare namespace LBYS.Lab {
    class AcceptGrid extends Serenity.EntityGrid<AcceptRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcceptDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class AntibiogramDialog extends Serenity.EntityDialog<AntibiogramRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AntibiogramForm;
    }
}
declare namespace LBYS.Lab {
    class AntibiogramGrid extends Serenity.EntityGrid<AntibiogramRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AntibiogramDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class AssayDialog extends Serenity.EntityDialog<AssayRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssayForm;
    }
}
declare namespace LBYS.Lab {
    class AssayGrid extends Serenity.EntityGrid<AssayRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssayDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class AssayResultDialog extends Serenity.EntityDialog<AssayResultRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AssayResultForm;
    }
}
declare namespace LBYS.Lab {
    class AssayResultGrid extends Serenity.EntityGrid<AssayResultRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AssayResultDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class BacteriumDialog extends Serenity.EntityDialog<BacteriumRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BacteriumForm;
    }
}
declare namespace LBYS.Lab {
    class BacteriumGrid extends Serenity.EntityGrid<BacteriumRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BacteriumDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ChangeDialog extends Serenity.EntityDialog<ChangeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ChangeForm;
    }
}
declare namespace LBYS.Lab {
    class ChangeGrid extends Serenity.EntityGrid<ChangeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChangeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ClaimDialog extends Serenity.EntityDialog<ClaimRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ClaimForm;
    }
}
declare namespace LBYS.Lab {
    class ClaimGrid extends Serenity.EntityGrid<ClaimRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ClaimDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class CodeDialog extends Serenity.EntityDialog<CodeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CodeForm;
    }
}
declare namespace LBYS.Lab {
    class CodeGrid extends Serenity.EntityGrid<CodeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CodeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ControlDialog extends Serenity.EntityDialog<ControlRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ControlForm;
    }
}
declare namespace LBYS.Lab {
    class ControlGrid extends Serenity.EntityGrid<ControlRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ControlDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class DescriptionDialog extends Serenity.EntityDialog<DescriptionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DescriptionForm;
    }
}
declare namespace LBYS.Lab {
    class DescriptionGrid extends Serenity.EntityGrid<DescriptionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DescriptionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class DetailDialog extends Serenity.EntityDialog<DetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DetailForm;
    }
}
declare namespace LBYS.Lab {
    class DetailGrid extends Serenity.EntityGrid<DetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class DeviceDialog extends Serenity.EntityDialog<DeviceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DeviceForm;
    }
}
declare namespace LBYS.Lab {
    class DeviceGrid extends Serenity.EntityGrid<DeviceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DeviceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class DoctorDialog extends Serenity.EntityDialog<DoctorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DoctorForm;
    }
}
declare namespace LBYS.Lab {
    class DoctorGrid extends Serenity.EntityGrid<DoctorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DoctorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ImageDialog extends Serenity.EntityDialog<ImageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ImageForm;
    }
}
declare namespace LBYS.Lab {
    class ImageGrid extends Serenity.EntityGrid<ImageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class IndustryDialog extends Serenity.EntityDialog<IndustryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: IndustryForm;
    }
}
declare namespace LBYS.Lab {
    class IndustryGrid extends Serenity.EntityGrid<IndustryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof IndustryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class InstitutionDialog extends Serenity.EntityDialog<InstitutionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstitutionForm;
    }
}
declare namespace LBYS.Lab {
    class InstitutionGrid extends Serenity.EntityGrid<InstitutionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstitutionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class InstitutionDoctorDialog extends Serenity.EntityDialog<InstitutionDoctorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstitutionDoctorForm;
    }
}
declare namespace LBYS.Lab {
    class InstitutionDoctorGrid extends Serenity.EntityGrid<InstitutionDoctorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstitutionDoctorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelDialog extends Serenity.EntityDialog<InstitutionPanelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstitutionPanelForm;
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelGrid extends Serenity.EntityGrid<InstitutionPanelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstitutionPanelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelAssayDialog extends Serenity.EntityDialog<InstitutionPanelAssayRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InstitutionPanelAssayForm;
    }
}
declare namespace LBYS.Lab {
    class InstitutionPanelAssayGrid extends Serenity.EntityGrid<InstitutionPanelAssayRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InstitutionPanelAssayDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceForm;
    }
}
declare namespace LBYS.Lab {
    class InvoiceGrid extends Serenity.EntityGrid<InvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class LaboratoryDialog extends Serenity.EntityDialog<LaboratoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LaboratoryForm;
    }
}
declare namespace LBYS.Lab {
    class LaboratoryGrid extends Serenity.EntityGrid<LaboratoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LaboratoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class LekDialog extends Serenity.EntityDialog<LekRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LekForm;
    }
}
declare namespace LBYS.Lab {
    class LekGrid extends Serenity.EntityGrid<LekRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LekDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class LevelsDialog extends Serenity.EntityDialog<LevelsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LevelsForm;
    }
}
declare namespace LBYS.Lab {
    class LevelsGrid extends Serenity.EntityGrid<LevelsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LevelsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaterialForm;
    }
}
declare namespace LBYS.Lab {
    class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class NotificationDialog extends Serenity.EntityDialog<NotificationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NotificationForm;
    }
}
declare namespace LBYS.Lab {
    class NotificationGrid extends Serenity.EntityGrid<NotificationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NotificationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class PanelDialog extends Serenity.EntityDialog<PanelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PanelForm;
    }
}
declare namespace LBYS.Lab {
    class PanelGrid extends Serenity.EntityGrid<PanelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PanelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class PanelAssayDialog extends Serenity.EntityDialog<PanelAssayRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PanelAssayForm;
    }
}
declare namespace LBYS.Lab {
    class PanelAssayGrid extends Serenity.EntityGrid<PanelAssayRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PanelAssayDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class PatientDialog extends Serenity.EntityDialog<PatientRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PatientForm;
    }
}
declare namespace LBYS.Lab {
    class PatientGrid extends Serenity.EntityGrid<PatientRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PatientDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ReferenceDialog extends Serenity.EntityDialog<ReferenceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReferenceForm;
    }
}
declare namespace LBYS.Lab {
    class ReferenceGrid extends Serenity.EntityGrid<ReferenceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReferenceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class ReportDialog extends Serenity.EntityDialog<ReportRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReportForm;
    }
}
declare namespace LBYS.Lab {
    class ReportGrid extends Serenity.EntityGrid<ReportRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReportDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class SampleDialog extends Serenity.EntityDialog<SampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SampleForm;
    }
}
declare namespace LBYS.Lab {
    class SampleGrid extends Serenity.EntityGrid<SampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SampleDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class SutDialog extends Serenity.EntityDialog<SutRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SutForm;
    }
}
declare namespace LBYS.Lab {
    class SutGrid extends Serenity.EntityGrid<SutRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SutDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class TemplateDialog extends Serenity.EntityDialog<TemplateRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TemplateForm;
    }
}
declare namespace LBYS.Lab {
    class TemplateGrid extends Serenity.EntityGrid<TemplateRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TemplateDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class TubeDialog extends Serenity.EntityDialog<TubeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TubeForm;
    }
}
declare namespace LBYS.Lab {
    class TubeGrid extends Serenity.EntityGrid<TubeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TubeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class UnitDialog extends Serenity.EntityDialog<UnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitForm;
    }
}
declare namespace LBYS.Lab {
    class UnitGrid extends Serenity.EntityGrid<UnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class UserInstitutionDialog extends Serenity.EntityDialog<UserInstitutionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserInstitutionForm;
    }
}
declare namespace LBYS.Lab {
    class UserInstitutionGrid extends Serenity.EntityGrid<UserInstitutionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserInstitutionDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class UserLaboratoryDialog extends Serenity.EntityDialog<UserLaboratoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserLaboratoryForm;
    }
}
declare namespace LBYS.Lab {
    class UserLaboratoryGrid extends Serenity.EntityGrid<UserLaboratoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserLaboratoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Lab {
    class UserUnitDialog extends Serenity.EntityDialog<UserUnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UserUnitForm;
    }
}
declare namespace LBYS.Lab {
    class UserUnitGrid extends Serenity.EntityGrid<UserUnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserUnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace LBYS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace LBYS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}

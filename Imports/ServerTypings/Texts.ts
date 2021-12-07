namespace LBYS.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Lab {

            namespace Accept {
                export const Accept: string;
                export const AcceptDate: string;
                export const AcceptUserDisplayName: string;
                export const AcceptUserEmail: string;
                export const AcceptUserId: string;
                export const AcceptUserInsertDate: string;
                export const AcceptUserInsertUserId: string;
                export const AcceptUserIsActive: string;
                export const AcceptUserLastDirectoryUpdate: string;
                export const AcceptUserSource: string;
                export const AcceptUserUpdateDate: string;
                export const AcceptUserUpdateUserId: string;
                export const AcceptUserUserImage: string;
                export const AcceptUserUsername: string;
                export const Id: string;
                export const SampleBarcode: string;
                export const SampleClaimId: string;
                export const SampleId: string;
                export const SampleInsertDate: string;
                export const SampleInsertUserId: string;
                export const SampleIsActive: string;
                export const SampleRack: string;
                export const SampleUnitId: string;
                export const SampleUpdateDate: string;
                export const SampleUpdateUserId: string;
            }

            namespace Antibiogram {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const BacteriumAssayId: string;
                export const BacteriumColony: string;
                export const BacteriumDescriptionId: string;
                export const BacteriumDetailId: string;
                export const BacteriumId: string;
                export const BacteriumInsertDate: string;
                export const BacteriumInsertUserId: string;
                export const BacteriumIsActive: string;
                export const BacteriumName: string;
                export const BacteriumResult: string;
                export const BacteriumType: string;
                export const BacteriumUpdateDate: string;
                export const BacteriumUpdateUserId: string;
                export const Description: string;
                export const Hide: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Result: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
                export const UseIdrId: string;
            }

            namespace Assay {
                export const DefaultValue: string;
                export const Formula: string;
                export const Hide: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const MelisId: string;
                export const Method: string;
                export const ParentDefaultValue: string;
                export const ParentFormula: string;
                export const ParentHide: string;
                export const ParentId: string;
                export const ParentInsertDate: string;
                export const ParentInsertUserId: string;
                export const ParentIsActive: string;
                export const ParentMelisId: string;
                export const ParentMethod: string;
                export const ParentParentId: string;
                export const ParentPrice: string;
                export const ParentPrice2: string;
                export const ParentResultType: string;
                export const ParentSort: string;
                export const ParentSutId: string;
                export const ParentUnit: string;
                export const ParentUnitId: string;
                export const ParentUpdateDate: string;
                export const ParentUpdateUserId: string;
                export const Price: string;
                export const Price2: string;
                export const ResultType: string;
                export const Sort: string;
                export const SutCode: string;
                export const SutId: string;
                export const SutInsertDate: string;
                export const SutInsertUserId: string;
                export const SutIsActive: string;
                export const SutLoinc: string;
                export const SutName: string;
                export const SutPoint: string;
                export const SutUpdateDate: string;
                export const SutUpdateUserId: string;
                export const Unit: string;
                export const UnitId: string;
                export const UnitInsertDate: string;
                export const UnitInsertUserId: string;
                export const UnitIsActive: string;
                export const UnitIsAssayBarcode: string;
                export const UnitLaboratoryId: string;
                export const UnitName: string;
                export const UnitSort: string;
                export const UnitTimetoResults: string;
                export const UnitTubeId: string;
                export const UnitType: string;
                export const UnitUpdateDate: string;
                export const UnitUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace AssayResult {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Id: string;
            }

            namespace Bacterium {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Colony: string;
                export const Description: string;
                export const DescriptionCode: string;
                export const DescriptionId: string;
                export const DescriptionInsertDate: string;
                export const DescriptionInsertUserId: string;
                export const DescriptionIsActive: string;
                export const DescriptionType: string;
                export const DescriptionUpdateDate: string;
                export const DescriptionUpdateUserId: string;
                export const DetailAssayId: string;
                export const DetailDescriptionId: string;
                export const DetailDeviceDate: string;
                export const DetailDeviceId: string;
                export const DetailId: string;
                export const DetailImportance: string;
                export const DetailInsertDate: string;
                export const DetailInsertUserId: string;
                export const DetailInstitutionId: string;
                export const DetailIsActive: string;
                export const DetailNHigh: string;
                export const DetailNLow: string;
                export const DetailPHigh: string;
                export const DetailPLow: string;
                export const DetailParentId: string;
                export const DetailPicture: string;
                export const DetailPrice: string;
                export const DetailResult: string;
                export const DetailResultDate: string;
                export const DetailResultUserId: string;
                export const DetailSampleId: string;
                export const DetailSpecial: string;
                export const DetailUnit: string;
                export const DetailUpdateDate: string;
                export const DetailUpdateUserId: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const Result: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Change {
                export const DetailAssayId: string;
                export const DetailDescriptionId: string;
                export const DetailDeviceDate: string;
                export const DetailDeviceId: string;
                export const DetailId: string;
                export const DetailImportance: string;
                export const DetailInsertDate: string;
                export const DetailInsertUserId: string;
                export const DetailInstitutionId: string;
                export const DetailIsActive: string;
                export const DetailNHigh: string;
                export const DetailNLow: string;
                export const DetailPHigh: string;
                export const DetailPLow: string;
                export const DetailParentId: string;
                export const DetailPicture: string;
                export const DetailPrice: string;
                export const DetailResult: string;
                export const DetailResultDate: string;
                export const DetailResultUserId: string;
                export const DetailSampleId: string;
                export const DetailSpecial: string;
                export const DetailUnit: string;
                export const DetailUpdateDate: string;
                export const DetailUpdateUserId: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Result: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Claim {
                export const ClaimType: string;
                export const Description: string;
                export const Fee: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
                export const InvoiceCounts: string;
                export const InvoiceDate: string;
                export const InvoiceId: string;
                export const InvoiceInsertDate: string;
                export const InvoiceInsertUserId: string;
                export const InvoiceInstitutionId: string;
                export const InvoiceIsActive: string;
                export const InvoiceLaboratoryId: string;
                export const InvoiceNumber: string;
                export const InvoicePrite: string;
                export const InvoiceStatus: string;
                export const InvoiceUpdateDate: string;
                export const InvoiceUpdateUserId: string;
                export const InvoiceYear: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const PatientAddress: string;
                export const PatientBirthdate: string;
                export const PatientBloodGroup: string;
                export const PatientEMail: string;
                export const PatientFatherName: string;
                export const PatientId: string;
                export const PatientIdNumber: string;
                export const PatientInsertDate: string;
                export const PatientInsertUserId: string;
                export const PatientIsActive: string;
                export const PatientMotherName: string;
                export const PatientName: string;
                export const PatientPhone: string;
                export const PatientPlace: string;
                export const PatientUpdateDate: string;
                export const PatientUpdateUserId: string;
                export const PaymentStatus: string;
                export const PaymentType: string;
                export const Price: string;
                export const Priorty: string;
                export const RecordDate: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Code {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Code: string;
                export const DeviceBoudrate: string;
                export const DeviceDatabits: string;
                export const DeviceDtr: string;
                export const DeviceHandshake: string;
                export const DeviceHost: string;
                export const DeviceId: string;
                export const DeviceInsertDate: string;
                export const DeviceInsertUserId: string;
                export const DeviceIp: string;
                export const DeviceIsActive: string;
                export const DeviceLaboratoryId: string;
                export const DeviceName: string;
                export const DeviceParity: string;
                export const DevicePort: string;
                export const DeviceRts: string;
                export const DeviceStopbits: string;
                export const DeviceType: string;
                export const DeviceUpdateDate: string;
                export const DeviceUpdateUserId: string;
                export const Digit: string;
                export const Direction: string;
                export const Factor: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Control {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const LevelsCodeId: string;
                export const LevelsHide: string;
                export const LevelsHigh: string;
                export const LevelsId: string;
                export const LevelsInsertDate: string;
                export const LevelsInsertUserId: string;
                export const LevelsIsActive: string;
                export const LevelsLot: string;
                export const LevelsLow: string;
                export const LevelsName: string;
                export const LevelsUpdateDate: string;
                export const LevelsUpdateUserId: string;
                export const RecordDate: string;
                export const Result: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Description {
                export const Code: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Detail {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Description: string;
                export const DescriptionCode: string;
                export const DescriptionId: string;
                export const DescriptionInsertDate: string;
                export const DescriptionInsertUserId: string;
                export const DescriptionIsActive: string;
                export const DescriptionType: string;
                export const DescriptionUpdateDate: string;
                export const DescriptionUpdateUserId: string;
                export const DeviceDate: string;
                export const DeviceId: string;
                export const Id: string;
                export const Importance: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
                export const IsActive: string;
                export const NHigh: string;
                export const NLow: string;
                export const PHigh: string;
                export const PLow: string;
                export const ParentAssayId: string;
                export const ParentDescriptionId: string;
                export const ParentDeviceDate: string;
                export const ParentDeviceId: string;
                export const ParentId: string;
                export const ParentImportance: string;
                export const ParentInsertDate: string;
                export const ParentInsertUserId: string;
                export const ParentInstitutionId: string;
                export const ParentIsActive: string;
                export const ParentNHigh: string;
                export const ParentNLow: string;
                export const ParentPHigh: string;
                export const ParentPLow: string;
                export const ParentParentId: string;
                export const ParentPicture: string;
                export const ParentPrice: string;
                export const ParentResult: string;
                export const ParentResultDate: string;
                export const ParentResultUserId: string;
                export const ParentSampleId: string;
                export const ParentSpecial: string;
                export const ParentUnit: string;
                export const ParentUpdateDate: string;
                export const ParentUpdateUserId: string;
                export const Picture: string;
                export const Price: string;
                export const Result: string;
                export const ResultDate: string;
                export const ResultUserId: string;
                export const SampleBarcode: string;
                export const SampleClaimId: string;
                export const SampleId: string;
                export const SampleInsertDate: string;
                export const SampleInsertUserId: string;
                export const SampleIsActive: string;
                export const SampleRack: string;
                export const SampleUnitId: string;
                export const SampleUpdateDate: string;
                export const SampleUpdateUserId: string;
                export const Special: string;
                export const Unit: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Device {
                export const Boudrate: string;
                export const Databits: string;
                export const Dtr: string;
                export const Handshake: string;
                export const Host: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const Ip: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Name: string;
                export const Parity: string;
                export const Port: string;
                export const Rts: string;
                export const Stopbits: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Doctor {
                export const Address: string;
                export const Appellation: string;
                export const EMail: string;
                export const Gender: string;
                export const Id: string;
                export const IdNumber: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Name: string;
                export const Phone: string;
                export const RegistrationNumber: string;
                export const Task: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Image {
                export const DetailAssayId: string;
                export const DetailDescriptionId: string;
                export const DetailDeviceDate: string;
                export const DetailDeviceId: string;
                export const DetailId: string;
                export const DetailImportance: string;
                export const DetailInsertDate: string;
                export const DetailInsertUserId: string;
                export const DetailInstitutionId: string;
                export const DetailIsActive: string;
                export const DetailNHigh: string;
                export const DetailNLow: string;
                export const DetailPHigh: string;
                export const DetailPLow: string;
                export const DetailParentId: string;
                export const DetailPicture: string;
                export const DetailPrice: string;
                export const DetailResult: string;
                export const DetailResultDate: string;
                export const DetailResultUserId: string;
                export const DetailSampleId: string;
                export const DetailSpecial: string;
                export const DetailUnit: string;
                export const DetailUpdateDate: string;
                export const DetailUpdateUserId: string;
                export const Id: string;
                export const ImageUid: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Path: string;
                export const SeriUid: string;
                export const StudyUid: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Industry {
                export const Address: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const Phone: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Institution {
                export const Address: string;
                export const Id: string;
                export const IndustryAddress: string;
                export const IndustryId: string;
                export const IndustryInsertDate: string;
                export const IndustryInsertUserId: string;
                export const IndustryIsActive: string;
                export const IndustryName: string;
                export const IndustryPhone: string;
                export const IndustryUpdateDate: string;
                export const IndustryUpdateUserId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const IsExternal: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Name: string;
                export const PaymentType: string;
                export const Phone: string;
                export const Price: string;
                export const PriceType: string;
                export const Symbol: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace InstitutionDoctor {
                export const DoctorAddress: string;
                export const DoctorAppellation: string;
                export const DoctorEMail: string;
                export const DoctorGender: string;
                export const DoctorId: string;
                export const DoctorIdNumber: string;
                export const DoctorInsertDate: string;
                export const DoctorInsertUserId: string;
                export const DoctorIsActive: string;
                export const DoctorLaboratoryId: string;
                export const DoctorName: string;
                export const DoctorPhone: string;
                export const DoctorRegistrationNumber: string;
                export const DoctorTask: string;
                export const DoctorUpdateDate: string;
                export const DoctorUpdateUserId: string;
                export const Id: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
            }

            namespace InstitutionPanel {
                export const ClaimType: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const PaymentType: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace InstitutionPanelAssay {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Id: string;
                export const InstitutionPanelClaimType: string;
                export const InstitutionPanelId: string;
                export const InstitutionPanelInsertDate: string;
                export const InstitutionPanelInsertUserId: string;
                export const InstitutionPanelInstitutionId: string;
                export const InstitutionPanelIsActive: string;
                export const InstitutionPanelName: string;
                export const InstitutionPanelPaymentType: string;
                export const InstitutionPanelUpdateDate: string;
                export const InstitutionPanelUpdateUserId: string;
                export const Price: string;
            }

            namespace Invoice {
                export const Counts: string;
                export const Date: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Number: string;
                export const Prite: string;
                export const Status: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
                export const Year: string;
            }

            namespace Laboratory {
                export const Address: string;
                export const EMail: string;
                export const Fax: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const Institution: string;
                export const IsAcceptrequired: string;
                export const IsActive: string;
                export const IsDoNotReprint: string;
                export const IsPaymentMandatory: string;
                export const Logo: string;
                export const Mernis: string;
                export const Name: string;
                export const Phone: string;
                export const SrvCovid: string;
                export const SrvENabiz: string;
                export const SrvMelis: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Lek {
                export const Error: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Lek: string;
                export const Type: string;
                export const UnitId: string;
                export const UnitInsertDate: string;
                export const UnitInsertUserId: string;
                export const UnitIsActive: string;
                export const UnitIsAssayBarcode: string;
                export const UnitLaboratoryId: string;
                export const UnitName: string;
                export const UnitSort: string;
                export const UnitTimetoResults: string;
                export const UnitTubeId: string;
                export const UnitType: string;
                export const UnitUpdateDate: string;
                export const UnitUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
                export const Warning: string;
            }

            namespace Levels {
                export const Code: string;
                export const CodeAssayId: string;
                export const CodeDeviceId: string;
                export const CodeDigit: string;
                export const CodeDirection: string;
                export const CodeFactor: string;
                export const CodeId: string;
                export const CodeInsertDate: string;
                export const CodeInsertUserId: string;
                export const CodeIsActive: string;
                export const CodeUpdateDate: string;
                export const CodeUpdateUserId: string;
                export const Hide: string;
                export const High: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Lot: string;
                export const Low: string;
                export const Name: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Material {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Name: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Notification {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Message: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace Panel {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Name: string;
                export const Price: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace PanelAssay {
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Id: string;
                export const PanelId: string;
                export const PanelInsertDate: string;
                export const PanelInsertUserId: string;
                export const PanelIsActive: string;
                export const PanelLaboratoryId: string;
                export const PanelName: string;
                export const PanelPrice: string;
                export const PanelUpdateDate: string;
                export const PanelUpdateUserId: string;
            }

            namespace Patient {
                export const Address: string;
                export const Birthdate: string;
                export const BloodGroup: string;
                export const EMail: string;
                export const FatherName: string;
                export const Id: string;
                export const IdNumber: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const MotherName: string;
                export const Name: string;
                export const Phone: string;
                export const Place: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Reference {
                export const Age: string;
                export const AssayDefaultValue: string;
                export const AssayFormula: string;
                export const AssayHide: string;
                export const AssayId: string;
                export const AssayInsertDate: string;
                export const AssayInsertUserId: string;
                export const AssayIsActive: string;
                export const AssayMelisId: string;
                export const AssayMethod: string;
                export const AssayParentId: string;
                export const AssayPrice: string;
                export const AssayPrice2: string;
                export const AssayResultType: string;
                export const AssaySort: string;
                export const AssaySutId: string;
                export const AssayUnit: string;
                export const AssayUnitId: string;
                export const AssayUpdateDate: string;
                export const AssayUpdateUserId: string;
                export const Description: string;
                export const Finish: string;
                export const Gender: string;
                export const High: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Low: string;
                export const Start: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Report {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Report: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Sample {
                export const Barcode: string;
                export const ClaimClaimType: string;
                export const ClaimDescription: string;
                export const ClaimFee: string;
                export const ClaimId: string;
                export const ClaimInsertDate: string;
                export const ClaimInsertUserId: string;
                export const ClaimInstitutionId: string;
                export const ClaimInvoiceId: string;
                export const ClaimIsActive: string;
                export const ClaimLaboratoryId: string;
                export const ClaimPatientId: string;
                export const ClaimPaymentStatus: string;
                export const ClaimPaymentType: string;
                export const ClaimPrice: string;
                export const ClaimPriorty: string;
                export const ClaimRecordDate: string;
                export const ClaimUpdateDate: string;
                export const ClaimUpdateUserId: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Rack: string;
                export const UnitId: string;
                export const UnitInsertDate: string;
                export const UnitInsertUserId: string;
                export const UnitIsActive: string;
                export const UnitIsAssayBarcode: string;
                export const UnitLaboratoryId: string;
                export const UnitName: string;
                export const UnitSort: string;
                export const UnitTimetoResults: string;
                export const UnitTubeId: string;
                export const UnitType: string;
                export const UnitUpdateDate: string;
                export const UnitUpdateUserId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Sut {
                export const Code: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const Loinc: string;
                export const Name: string;
                export const Point: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Template {
                export const BgColor: string;
                export const Color: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Tube {
                export const Bar: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const MaterialId: string;
                export const MaterialInsertDate: string;
                export const MaterialInsertUserId: string;
                export const MaterialIsActive: string;
                export const MaterialName: string;
                export const MaterialUpdateDate: string;
                export const MaterialUpdateUserId: string;
                export const Name: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace Unit {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InsertUserName: string;
                export const IsActive: string;
                export const IsAssayBarcode: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const Name: string;
                export const Sort: string;
                export const TimetoResults: string;
                export const TubeBar: string;
                export const TubeId: string;
                export const TubeInsertDate: string;
                export const TubeInsertUserId: string;
                export const TubeIsActive: string;
                export const TubeMaterialId: string;
                export const TubeName: string;
                export const TubeUpdateDate: string;
                export const TubeUpdateUserId: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UpdateUserName: string;
            }

            namespace UserInstitution {
                export const Id: string;
                export const InstitutionAddress: string;
                export const InstitutionId: string;
                export const InstitutionIndustryId: string;
                export const InstitutionInsertDate: string;
                export const InstitutionInsertUserId: string;
                export const InstitutionIsActive: string;
                export const InstitutionIsExternal: string;
                export const InstitutionLaboratoryId: string;
                export const InstitutionName: string;
                export const InstitutionPaymentType: string;
                export const InstitutionPhone: string;
                export const InstitutionPrice: string;
                export const InstitutionPriceType: string;
                export const InstitutionSymbol: string;
                export const InstitutionUpdateDate: string;
                export const InstitutionUpdateUserId: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace UserLaboratory {
                export const Id: string;
                export const LaboratoryAddress: string;
                export const LaboratoryEMail: string;
                export const LaboratoryFax: string;
                export const LaboratoryId: string;
                export const LaboratoryInsertDate: string;
                export const LaboratoryInsertUserId: string;
                export const LaboratoryInstitution: string;
                export const LaboratoryIsAcceptrequired: string;
                export const LaboratoryIsActive: string;
                export const LaboratoryIsDoNotReprint: string;
                export const LaboratoryIsPaymentMandatory: string;
                export const LaboratoryLogo: string;
                export const LaboratoryMernis: string;
                export const LaboratoryName: string;
                export const LaboratoryPhone: string;
                export const LaboratorySrvCovid: string;
                export const LaboratorySrvENabiz: string;
                export const LaboratorySrvMelis: string;
                export const LaboratoryUpdateDate: string;
                export const LaboratoryUpdateUserId: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace UserUnit {
                export const Id: string;
                export const UnitId: string;
                export const UnitInsertDate: string;
                export const UnitInsertUserId: string;
                export const UnitIsActive: string;
                export const UnitIsAssayBarcode: string;
                export const UnitLaboratoryId: string;
                export const UnitName: string;
                export const UnitSort: string;
                export const UnitTimetoResults: string;
                export const UnitTubeId: string;
                export const UnitType: string;
                export const UnitUpdateDate: string;
                export const UnitUpdateUserId: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    LBYS['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Lab:{Accept:{Accept:1,AcceptDate:1,AcceptUserDisplayName:1,AcceptUserEmail:1,AcceptUserId:1,AcceptUserInsertDate:1,AcceptUserInsertUserId:1,AcceptUserIsActive:1,AcceptUserLastDirectoryUpdate:1,AcceptUserSource:1,AcceptUserUpdateDate:1,AcceptUserUpdateUserId:1,AcceptUserUserImage:1,AcceptUserUsername:1,Id:1,SampleBarcode:1,SampleClaimId:1,SampleId:1,SampleInsertDate:1,SampleInsertUserId:1,SampleIsActive:1,SampleRack:1,SampleUnitId:1,SampleUpdateDate:1,SampleUpdateUserId:1},Antibiogram:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,BacteriumAssayId:1,BacteriumColony:1,BacteriumDescriptionId:1,BacteriumDetailId:1,BacteriumId:1,BacteriumInsertDate:1,BacteriumInsertUserId:1,BacteriumIsActive:1,BacteriumName:1,BacteriumResult:1,BacteriumType:1,BacteriumUpdateDate:1,BacteriumUpdateUserId:1,Description:1,Hide:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Result:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1,UseIdrId:1},Assay:{DefaultValue:1,Formula:1,Hide:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,MelisId:1,Method:1,ParentDefaultValue:1,ParentFormula:1,ParentHide:1,ParentId:1,ParentInsertDate:1,ParentInsertUserId:1,ParentIsActive:1,ParentMelisId:1,ParentMethod:1,ParentParentId:1,ParentPrice:1,ParentPrice2:1,ParentResultType:1,ParentSort:1,ParentSutId:1,ParentUnit:1,ParentUnitId:1,ParentUpdateDate:1,ParentUpdateUserId:1,Price:1,Price2:1,ResultType:1,Sort:1,SutCode:1,SutId:1,SutInsertDate:1,SutInsertUserId:1,SutIsActive:1,SutLoinc:1,SutName:1,SutPoint:1,SutUpdateDate:1,SutUpdateUserId:1,Unit:1,UnitId:1,UnitInsertDate:1,UnitInsertUserId:1,UnitIsActive:1,UnitIsAssayBarcode:1,UnitLaboratoryId:1,UnitName:1,UnitSort:1,UnitTimetoResults:1,UnitTubeId:1,UnitType:1,UnitUpdateDate:1,UnitUpdateUserId:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},AssayResult:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Id:1},Bacterium:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Colony:1,Description:1,DescriptionCode:1,DescriptionId:1,DescriptionInsertDate:1,DescriptionInsertUserId:1,DescriptionIsActive:1,DescriptionType:1,DescriptionUpdateDate:1,DescriptionUpdateUserId:1,DetailAssayId:1,DetailDescriptionId:1,DetailDeviceDate:1,DetailDeviceId:1,DetailId:1,DetailImportance:1,DetailInsertDate:1,DetailInsertUserId:1,DetailInstitutionId:1,DetailIsActive:1,DetailNHigh:1,DetailNLow:1,DetailPHigh:1,DetailPLow:1,DetailParentId:1,DetailPicture:1,DetailPrice:1,DetailResult:1,DetailResultDate:1,DetailResultUserId:1,DetailSampleId:1,DetailSpecial:1,DetailUnit:1,DetailUpdateDate:1,DetailUpdateUserId:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,Result:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Change:{DetailAssayId:1,DetailDescriptionId:1,DetailDeviceDate:1,DetailDeviceId:1,DetailId:1,DetailImportance:1,DetailInsertDate:1,DetailInsertUserId:1,DetailInstitutionId:1,DetailIsActive:1,DetailNHigh:1,DetailNLow:1,DetailPHigh:1,DetailPLow:1,DetailParentId:1,DetailPicture:1,DetailPrice:1,DetailResult:1,DetailResultDate:1,DetailResultUserId:1,DetailSampleId:1,DetailSpecial:1,DetailUnit:1,DetailUpdateDate:1,DetailUpdateUserId:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Result:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Claim:{ClaimType:1,Description:1,Fee:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1,InvoiceCounts:1,InvoiceDate:1,InvoiceId:1,InvoiceInsertDate:1,InvoiceInsertUserId:1,InvoiceInstitutionId:1,InvoiceIsActive:1,InvoiceLaboratoryId:1,InvoiceNumber:1,InvoicePrite:1,InvoiceStatus:1,InvoiceUpdateDate:1,InvoiceUpdateUserId:1,InvoiceYear:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,PatientAddress:1,PatientBirthdate:1,PatientBloodGroup:1,PatientEMail:1,PatientFatherName:1,PatientId:1,PatientIdNumber:1,PatientInsertDate:1,PatientInsertUserId:1,PatientIsActive:1,PatientMotherName:1,PatientName:1,PatientPhone:1,PatientPlace:1,PatientUpdateDate:1,PatientUpdateUserId:1,PaymentStatus:1,PaymentType:1,Price:1,Priorty:1,RecordDate:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Code:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Code:1,DeviceBoudrate:1,DeviceDatabits:1,DeviceDtr:1,DeviceHandshake:1,DeviceHost:1,DeviceId:1,DeviceInsertDate:1,DeviceInsertUserId:1,DeviceIp:1,DeviceIsActive:1,DeviceLaboratoryId:1,DeviceName:1,DeviceParity:1,DevicePort:1,DeviceRts:1,DeviceStopbits:1,DeviceType:1,DeviceUpdateDate:1,DeviceUpdateUserId:1,Digit:1,Direction:1,Factor:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Control:{Description:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,LevelsCodeId:1,LevelsHide:1,LevelsHigh:1,LevelsId:1,LevelsInsertDate:1,LevelsInsertUserId:1,LevelsIsActive:1,LevelsLot:1,LevelsLow:1,LevelsName:1,LevelsUpdateDate:1,LevelsUpdateUserId:1,RecordDate:1,Result:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Description:{Code:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Detail:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Description:1,DescriptionCode:1,DescriptionId:1,DescriptionInsertDate:1,DescriptionInsertUserId:1,DescriptionIsActive:1,DescriptionType:1,DescriptionUpdateDate:1,DescriptionUpdateUserId:1,DeviceDate:1,DeviceId:1,Id:1,Importance:1,InsertDate:1,InsertUserId:1,InsertUserName:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1,IsActive:1,NHigh:1,NLow:1,PHigh:1,PLow:1,ParentAssayId:1,ParentDescriptionId:1,ParentDeviceDate:1,ParentDeviceId:1,ParentId:1,ParentImportance:1,ParentInsertDate:1,ParentInsertUserId:1,ParentInstitutionId:1,ParentIsActive:1,ParentNHigh:1,ParentNLow:1,ParentPHigh:1,ParentPLow:1,ParentParentId:1,ParentPicture:1,ParentPrice:1,ParentResult:1,ParentResultDate:1,ParentResultUserId:1,ParentSampleId:1,ParentSpecial:1,ParentUnit:1,ParentUpdateDate:1,ParentUpdateUserId:1,Picture:1,Price:1,Result:1,ResultDate:1,ResultUserId:1,SampleBarcode:1,SampleClaimId:1,SampleId:1,SampleInsertDate:1,SampleInsertUserId:1,SampleIsActive:1,SampleRack:1,SampleUnitId:1,SampleUpdateDate:1,SampleUpdateUserId:1,Special:1,Unit:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Device:{Boudrate:1,Databits:1,Dtr:1,Handshake:1,Host:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,Ip:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Name:1,Parity:1,Port:1,Rts:1,Stopbits:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Doctor:{Address:1,Appellation:1,EMail:1,Gender:1,Id:1,IdNumber:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Name:1,Phone:1,RegistrationNumber:1,Task:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Image:{DetailAssayId:1,DetailDescriptionId:1,DetailDeviceDate:1,DetailDeviceId:1,DetailId:1,DetailImportance:1,DetailInsertDate:1,DetailInsertUserId:1,DetailInstitutionId:1,DetailIsActive:1,DetailNHigh:1,DetailNLow:1,DetailPHigh:1,DetailPLow:1,DetailParentId:1,DetailPicture:1,DetailPrice:1,DetailResult:1,DetailResultDate:1,DetailResultUserId:1,DetailSampleId:1,DetailSpecial:1,DetailUnit:1,DetailUpdateDate:1,DetailUpdateUserId:1,Id:1,ImageUid:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Path:1,SeriUid:1,StudyUid:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Industry:{Address:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,Phone:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Institution:{Address:1,Id:1,IndustryAddress:1,IndustryId:1,IndustryInsertDate:1,IndustryInsertUserId:1,IndustryIsActive:1,IndustryName:1,IndustryPhone:1,IndustryUpdateDate:1,IndustryUpdateUserId:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,IsExternal:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Name:1,PaymentType:1,Phone:1,Price:1,PriceType:1,Symbol:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},InstitutionDoctor:{DoctorAddress:1,DoctorAppellation:1,DoctorEMail:1,DoctorGender:1,DoctorId:1,DoctorIdNumber:1,DoctorInsertDate:1,DoctorInsertUserId:1,DoctorIsActive:1,DoctorLaboratoryId:1,DoctorName:1,DoctorPhone:1,DoctorRegistrationNumber:1,DoctorTask:1,DoctorUpdateDate:1,DoctorUpdateUserId:1,Id:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1},InstitutionPanel:{ClaimType:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1,IsActive:1,Name:1,PaymentType:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},InstitutionPanelAssay:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Id:1,InstitutionPanelClaimType:1,InstitutionPanelId:1,InstitutionPanelInsertDate:1,InstitutionPanelInsertUserId:1,InstitutionPanelInstitutionId:1,InstitutionPanelIsActive:1,InstitutionPanelName:1,InstitutionPanelPaymentType:1,InstitutionPanelUpdateDate:1,InstitutionPanelUpdateUserId:1,Price:1},Invoice:{Counts:1,Date:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Number:1,Prite:1,Status:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1,Year:1},Laboratory:{Address:1,EMail:1,Fax:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,Institution:1,IsAcceptrequired:1,IsActive:1,IsDoNotReprint:1,IsPaymentMandatory:1,Logo:1,Mernis:1,Name:1,Phone:1,SrvCovid:1,SrvENabiz:1,SrvMelis:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Lek:{Error:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Lek:1,Type:1,UnitId:1,UnitInsertDate:1,UnitInsertUserId:1,UnitIsActive:1,UnitIsAssayBarcode:1,UnitLaboratoryId:1,UnitName:1,UnitSort:1,UnitTimetoResults:1,UnitTubeId:1,UnitType:1,UnitUpdateDate:1,UnitUpdateUserId:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1,Warning:1},Levels:{Code:1,CodeAssayId:1,CodeDeviceId:1,CodeDigit:1,CodeDirection:1,CodeFactor:1,CodeId:1,CodeInsertDate:1,CodeInsertUserId:1,CodeIsActive:1,CodeUpdateDate:1,CodeUpdateUserId:1,Hide:1,High:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Lot:1,Low:1,Name:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Material:{Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Name:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Notification:{Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Message:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},Panel:{Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Name:1,Price:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},PanelAssay:{AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Id:1,PanelId:1,PanelInsertDate:1,PanelInsertUserId:1,PanelIsActive:1,PanelLaboratoryId:1,PanelName:1,PanelPrice:1,PanelUpdateDate:1,PanelUpdateUserId:1},Patient:{Address:1,Birthdate:1,BloodGroup:1,EMail:1,FatherName:1,Id:1,IdNumber:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,MotherName:1,Name:1,Phone:1,Place:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Reference:{Age:1,AssayDefaultValue:1,AssayFormula:1,AssayHide:1,AssayId:1,AssayInsertDate:1,AssayInsertUserId:1,AssayIsActive:1,AssayMelisId:1,AssayMethod:1,AssayParentId:1,AssayPrice:1,AssayPrice2:1,AssayResultType:1,AssaySort:1,AssaySutId:1,AssayUnit:1,AssayUnitId:1,AssayUpdateDate:1,AssayUpdateUserId:1,Description:1,Finish:1,Gender:1,High:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Low:1,Start:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Report:{Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Report:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Sample:{Barcode:1,ClaimClaimType:1,ClaimDescription:1,ClaimFee:1,ClaimId:1,ClaimInsertDate:1,ClaimInsertUserId:1,ClaimInstitutionId:1,ClaimInvoiceId:1,ClaimIsActive:1,ClaimLaboratoryId:1,ClaimPatientId:1,ClaimPaymentStatus:1,ClaimPaymentType:1,ClaimPrice:1,ClaimPriorty:1,ClaimRecordDate:1,ClaimUpdateDate:1,ClaimUpdateUserId:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Rack:1,UnitId:1,UnitInsertDate:1,UnitInsertUserId:1,UnitIsActive:1,UnitIsAssayBarcode:1,UnitLaboratoryId:1,UnitName:1,UnitSort:1,UnitTimetoResults:1,UnitTubeId:1,UnitType:1,UnitUpdateDate:1,UnitUpdateUserId:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Sut:{Code:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,Loinc:1,Name:1,Point:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Template:{BgColor:1,Color:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Tube:{Bar:1,Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,MaterialId:1,MaterialInsertDate:1,MaterialInsertUserId:1,MaterialIsActive:1,MaterialName:1,MaterialUpdateDate:1,MaterialUpdateUserId:1,Name:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},Unit:{Id:1,InsertDate:1,InsertUserId:1,InsertUserName:1,IsActive:1,IsAssayBarcode:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,Name:1,Sort:1,TimetoResults:1,TubeBar:1,TubeId:1,TubeInsertDate:1,TubeInsertUserId:1,TubeIsActive:1,TubeMaterialId:1,TubeName:1,TubeUpdateDate:1,TubeUpdateUserId:1,Type:1,UpdateDate:1,UpdateUserId:1,UpdateUserName:1},UserInstitution:{Id:1,InstitutionAddress:1,InstitutionId:1,InstitutionIndustryId:1,InstitutionInsertDate:1,InstitutionInsertUserId:1,InstitutionIsActive:1,InstitutionIsExternal:1,InstitutionLaboratoryId:1,InstitutionName:1,InstitutionPaymentType:1,InstitutionPhone:1,InstitutionPrice:1,InstitutionPriceType:1,InstitutionSymbol:1,InstitutionUpdateDate:1,InstitutionUpdateUserId:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},UserLaboratory:{Id:1,LaboratoryAddress:1,LaboratoryEMail:1,LaboratoryFax:1,LaboratoryId:1,LaboratoryInsertDate:1,LaboratoryInsertUserId:1,LaboratoryInstitution:1,LaboratoryIsAcceptrequired:1,LaboratoryIsActive:1,LaboratoryIsDoNotReprint:1,LaboratoryIsPaymentMandatory:1,LaboratoryLogo:1,LaboratoryMernis:1,LaboratoryName:1,LaboratoryPhone:1,LaboratorySrvCovid:1,LaboratorySrvENabiz:1,LaboratorySrvMelis:1,LaboratoryUpdateDate:1,LaboratoryUpdateUserId:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},UserUnit:{Id:1,UnitId:1,UnitInsertDate:1,UnitInsertUserId:1,UnitIsActive:1,UnitIsAssayBarcode:1,UnitLaboratoryId:1,UnitName:1,UnitSort:1,UnitTimetoResults:1,UnitTubeId:1,UnitType:1,UnitUpdateDate:1,UnitUpdateUserId:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

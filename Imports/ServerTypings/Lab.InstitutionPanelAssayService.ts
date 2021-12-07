namespace LBYS.Lab {
    export namespace InstitutionPanelAssayService {
        export const baseUrl = 'Lab/InstitutionPanelAssay';

        export declare function Create(request: Serenity.SaveRequest<InstitutionPanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InstitutionPanelAssayRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InstitutionPanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InstitutionPanelAssayRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Lab/InstitutionPanelAssay/Create",
            Update = "Lab/InstitutionPanelAssay/Update",
            Delete = "Lab/InstitutionPanelAssay/Delete",
            Retrieve = "Lab/InstitutionPanelAssay/Retrieve",
            List = "Lab/InstitutionPanelAssay/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InstitutionPanelAssayService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

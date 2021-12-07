using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.UserLaboratoryRow>;
using MyRow = LBYS.Lab.UserLaboratoryRow;

namespace LBYS.Lab
{
    public interface IUserLaboratoryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UserLaboratoryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserLaboratoryListHandler
    {
        public UserLaboratoryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
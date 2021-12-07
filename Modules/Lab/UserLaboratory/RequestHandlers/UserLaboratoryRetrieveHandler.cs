using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.UserLaboratoryRow>;
using MyRow = LBYS.Lab.UserLaboratoryRow;

namespace LBYS.Lab
{
    public interface IUserLaboratoryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserLaboratoryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserLaboratoryRetrieveHandler
    {
        public UserLaboratoryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
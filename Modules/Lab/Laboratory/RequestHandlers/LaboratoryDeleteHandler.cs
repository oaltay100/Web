using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.LaboratoryRow;

namespace LBYS.Lab
{
    public interface ILaboratoryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LaboratoryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILaboratoryDeleteHandler
    {
        public LaboratoryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
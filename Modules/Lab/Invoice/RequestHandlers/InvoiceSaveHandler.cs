using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.InvoiceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.InvoiceRow;

namespace LBYS.Lab
{
    public interface IInvoiceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceSaveHandler
    {
        public InvoiceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
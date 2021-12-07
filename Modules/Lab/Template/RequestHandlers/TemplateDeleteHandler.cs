﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.TemplateRow;

namespace LBYS.Lab
{
    public interface ITemplateDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateDeleteHandler
    {
        public TemplateDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.DoctorRow>;
using MyRow = LBYS.Lab.DoctorRow;

namespace LBYS.Lab
{
    public interface IDoctorRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DoctorRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorRetrieveHandler
    {
        public DoctorRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
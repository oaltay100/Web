using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(InvoiceRow))]
    public class InvoiceController : Controller
    {
        [Route("Lab/Invoice")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Invoice/InvoiceIndex.cshtml");
        }
    }
}
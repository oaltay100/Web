using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ReportRow))]
    public class ReportController : Controller
    {
        [Route("Lab/Report")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Report/ReportIndex.cshtml");
        }
    }
}
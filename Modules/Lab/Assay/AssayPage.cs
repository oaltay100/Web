using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(AssayRow))]
    public class AssayController : Controller
    {
        [Route("Lab/Assay")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Assay/AssayIndex.cshtml");
        }
    }
}
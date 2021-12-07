using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(AssayResultRow))]
    public class AssayResultController : Controller
    {
        [Route("Lab/AssayResult")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/AssayResult/AssayResultIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ReferenceRow))]
    public class ReferenceController : Controller
    {
        [Route("Lab/Reference")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Reference/ReferenceIndex.cshtml");
        }
    }
}
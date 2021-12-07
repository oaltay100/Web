using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(InstitutionRow))]
    public class InstitutionController : Controller
    {
        [Route("Lab/Institution")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Institution/InstitutionIndex.cshtml");
        }
    }
}
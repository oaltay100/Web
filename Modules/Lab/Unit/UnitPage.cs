using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(UnitRow))]
    public class UnitController : Controller
    {
        [Route("Lab/Unit")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Unit/UnitIndex.cshtml");
        }
    }
}
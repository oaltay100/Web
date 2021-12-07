using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ChangeRow))]
    public class ChangeController : Controller
    {
        [Route("Lab/Change")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Change/ChangeIndex.cshtml");
        }
    }
}
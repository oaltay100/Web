using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(LekRow))]
    public class LekController : Controller
    {
        [Route("Lab/Lek")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Lek/LekIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(TubeRow))]
    public class TubeController : Controller
    {
        [Route("Lab/Tube")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Tube/TubeIndex.cshtml");
        }
    }
}
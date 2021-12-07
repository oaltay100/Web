using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(LevelsRow))]
    public class LevelsController : Controller
    {
        [Route("Lab/Levels")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Levels/LevelsIndex.cshtml");
        }
    }
}
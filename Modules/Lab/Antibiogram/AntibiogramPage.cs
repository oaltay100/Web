using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(AntibiogramRow))]
    public class AntibiogramController : Controller
    {
        [Route("Lab/Antibiogram")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Antibiogram/AntibiogramIndex.cshtml");
        }
    }
}
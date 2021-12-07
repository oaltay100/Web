using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(BacteriumRow))]
    public class BacteriumController : Controller
    {
        [Route("Lab/Bacterium")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Bacterium/BacteriumIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(PanelRow))]
    public class PanelController : Controller
    {
        [Route("Lab/Panel")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Panel/PanelIndex.cshtml");
        }
    }
}
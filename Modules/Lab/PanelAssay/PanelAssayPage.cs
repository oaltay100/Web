using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(PanelAssayRow))]
    public class PanelAssayController : Controller
    {
        [Route("Lab/PanelAssay")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/PanelAssay/PanelAssayIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(InstitutionPanelAssayRow))]
    public class InstitutionPanelAssayController : Controller
    {
        [Route("Lab/InstitutionPanelAssay")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/InstitutionPanelAssay/InstitutionPanelAssayIndex.cshtml");
        }
    }
}
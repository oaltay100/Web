using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(InstitutionPanelRow))]
    public class InstitutionPanelController : Controller
    {
        [Route("Lab/InstitutionPanel")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/InstitutionPanel/InstitutionPanelIndex.cshtml");
        }
    }
}
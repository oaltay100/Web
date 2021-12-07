using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(LaboratoryRow))]
    public class LaboratoryController : Controller
    {
        [Route("Lab/Laboratory")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Laboratory/LaboratoryIndex.cshtml");
        }
    }
}
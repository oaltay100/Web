using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(TemplateRow))]
    public class TemplateController : Controller
    {
        [Route("Lab/Template")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Template/TemplateIndex.cshtml");
        }
    }
}
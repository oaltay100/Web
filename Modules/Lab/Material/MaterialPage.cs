using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(MaterialRow))]
    public class MaterialController : Controller
    {
        [Route("Lab/Material")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Material/MaterialIndex.cshtml");
        }
    }
}
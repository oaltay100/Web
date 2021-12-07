using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(SutRow))]
    public class SutController : Controller
    {
        [Route("Lab/Sut")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Sut/SutIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(SampleRow))]
    public class SampleController : Controller
    {
        [Route("Lab/Sample")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Sample/SampleIndex.cshtml");
        }
    }
}
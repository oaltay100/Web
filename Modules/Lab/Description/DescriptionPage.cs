using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(DescriptionRow))]
    public class DescriptionController : Controller
    {
        [Route("Lab/Description")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Description/DescriptionIndex.cshtml");
        }
    }
}
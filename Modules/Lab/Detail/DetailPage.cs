using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(DetailRow))]
    public class DetailController : Controller
    {
        [Route("Lab/Detail")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Detail/DetailIndex.cshtml");
        }
    }
}
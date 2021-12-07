using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(AcceptRow))]
    public class AcceptController : Controller
    {
        [Route("Lab/Accept")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Accept/AcceptIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ClaimRow))]
    public class ClaimController : Controller
    {
        [Route("Lab/Claim")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Claim/ClaimIndex.cshtml");
        }
    }
}
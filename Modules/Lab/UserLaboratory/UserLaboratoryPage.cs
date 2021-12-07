using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(UserLaboratoryRow))]
    public class UserLaboratoryController : Controller
    {
        [Route("Lab/UserLaboratory")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/UserLaboratory/UserLaboratoryIndex.cshtml");
        }
    }
}
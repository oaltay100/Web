using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(UserInstitutionRow))]
    public class UserInstitutionController : Controller
    {
        [Route("Lab/UserInstitution")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/UserInstitution/UserInstitutionIndex.cshtml");
        }
    }
}
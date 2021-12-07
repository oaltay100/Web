using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(UserUnitRow))]
    public class UserUnitController : Controller
    {
        [Route("Lab/UserUnit")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/UserUnit/UserUnitIndex.cshtml");
        }
    }
}
using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(InstitutionDoctorRow))]
    public class InstitutionDoctorController : Controller
    {
        [Route("Lab/InstitutionDoctor")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/InstitutionDoctor/InstitutionDoctorIndex.cshtml");
        }
    }
}
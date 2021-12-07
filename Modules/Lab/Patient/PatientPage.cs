using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(PatientRow))]
    public class PatientController : Controller
    {
        [Route("Lab/Patient")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Patient/PatientIndex.cshtml");
        }
    }
}
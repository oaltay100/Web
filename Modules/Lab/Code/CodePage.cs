using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(CodeRow))]
    public class CodeController : Controller
    {
        [Route("Lab/Code")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Code/CodeIndex.cshtml");
        }
    }
}
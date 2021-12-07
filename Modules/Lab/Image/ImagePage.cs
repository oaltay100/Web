using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ImageRow))]
    public class ImageController : Controller
    {
        [Route("Lab/Image")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Image/ImageIndex.cshtml");
        }
    }
}
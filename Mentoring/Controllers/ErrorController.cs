using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mentoring.Controllers
{
    public partial class ErrorController : Controller
    {
		public virtual PartialViewResult Error()
		{
			return PartialView(MVC.Shared.Views.Error._Error);
		}
    }
}

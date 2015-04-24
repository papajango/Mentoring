using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mentoring.Controllers
{
    public partial class LoginController : Controller
    {
		public virtual PartialViewResult LoginPage()
		{
			return PartialView(MVC.Shared.Views.Login._LoginPage);
		}
		public virtual PartialViewResult User()
		{
			return PartialView(MVC.Shared.Views.Login._User);
		}

    }
}

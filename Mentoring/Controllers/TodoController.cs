using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mentoring.Controllers
{
    public partial class TodoController : Controller
    {
		public virtual PartialViewResult Todo()
		{
			return PartialView(MVC.Shared.Views.Todo._Todo);
		}
		public virtual PartialViewResult Search()
		{
			return PartialView(MVC.Shared.Views.Todo._Search);
		}
		public virtual PartialViewResult DeleteItem()
		{
			return PartialView(MVC.Shared.Views.Todo._DeleteItem);
		}
		public virtual PartialViewResult Statuses()
        {
            return PartialView(MVC.Shared.Views.Todo._Statuses);
        }
		public virtual PartialViewResult Details()
		{
			return PartialView(MVC.Shared.Views.Todo._Details);
		}
    }
}

using System.Web;
using System.Web.Optimization;

namespace Mentoring
{
	public class BundleConfig
	{
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles)
		{
			//bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
			//			"~/Scripts/jquery-{version}.js"));

			//bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
			//			"~/Scripts/jquery-ui-{version}.js"));

			//bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
			//			"~/Scripts/jquery.unobtrusive*",
			//			"~/Scripts/jquery.validate*"));

			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			//bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
			//			"~/Scripts/modernizr-*"));
			//bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
			//			"~/Scripts/jquery-{version}.js",
			//			"~/Scripts/bootstrap.js",
			//			"~/Scripts/angular.min.js",
			//			"~/Scripts/angularRangeSlider.js",
			//			"~/Scripts/angular-ui-router.js",
			//			"~/Scripts/angular-ui/ui-bootstrap.js",
			//			"~/Scripts/angular-ui/ui-bootstrap-tpls.js",
			//			"~/Scripts/app/app.js",
			//			"~/Scripts/app/services/todoService.js",
			//			"~/Scripts/app/services/authService.js",
			//			"~/Scripts/app/services/modalService.js",
			//			"~/Scripts/app/controllers/AuthController.js",
			//			"~/Scripts/app/controllers/TodoController.js",
			//			"~/Scripts/app/controllers/ModalController.js",
			//			"~/Scripts/app/directives/userDirective.js",
			//			"~/Scripts/app/directives/searchDirective.js",
			//			"~/Scripts/app/directives/statusesDirective.js",
			//			"~/Scripts/app/filters/todoFilter.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/styles.css"));
			bundles.Add(new StyleBundle("~/Content/bootstrap").Include("~/Content/bootstrap/bootstrap.css"));
		}
	}
}
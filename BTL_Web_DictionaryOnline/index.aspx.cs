using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL_Web_DictionaryOnline
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] != null)
            {
                btnLogin.Visible = false;
                username.InnerText = Session["username"].ToString();
                btnLogout.Visible = true;
            }
        }

        protected void btnLogout_onClick(object sender, EventArgs e)
        {
            Session["username"] = null;
            username.InnerText = "";
            btnLogin.Visible = true;
            btnLogout.Visible = false;
            Response.Redirect("login.aspx");
        }
    }
}
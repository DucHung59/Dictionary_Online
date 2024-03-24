using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL_Web_DictionaryOnline
{
    public partial class MainLayout : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["userID"] != null)
            {
                btnLogin.Visible = false;
                username.InnerText = Session["username"].ToString();
                btnLogout.Visible = true;
            } else
            {
                btnLogout.Visible = false;
            }
        }
    }
}
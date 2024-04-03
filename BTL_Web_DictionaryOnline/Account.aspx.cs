using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL_Web_DictionaryOnline
{
    public partial class Account : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("login.aspx");
            } 
            else
            {
                name.InnerText = Session["name"].ToString();
                username.InnerText = Session["username"].ToString();
            }
        }
    }
}
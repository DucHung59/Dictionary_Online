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
                Response.Redirect("login.html");
            } 
            else
            {
                name.InnerText = Session["name"].ToString();
                username.InnerText = Session["username"].ToString();
            }
        }

        protected void btnLogout_Click(object sender, EventArgs e)
        {
            Session["username"] = null;
            Response.Redirect("login.html");
        }

        protected void btnEdit_Click(object sender, EventArgs e)
        {
            editForm.Visible = true;
            btnLogout.Visible = false;
            btnEdit.Visible = false;
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            editForm.Visible = false;
            btnLogout.Visible = true;
            btnEdit.Visible = true;
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {

        }
    }
}
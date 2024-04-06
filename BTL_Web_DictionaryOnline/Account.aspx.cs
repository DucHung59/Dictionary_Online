using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BTL_Web_DictionaryOnline
{
    public partial class Account : System.Web.UI.Page
    {
        public string filePath = "App_Data/userAccounts/db.json";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("login.html");
            }
            else if (Session["username"].ToString() == "admin")
            {
                name.InnerText = Session["name"].ToString();
                username.InnerText = Session["username"].ToString();
                btnDelete.Visible = true;
                accounts.Visible = true;

                string fileName = Server.MapPath(filePath);

                string jsonContent = File.ReadAllText(fileName);
                List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);


                string htmls = "<table border='1' style='margin: 0 auto;border-collapse: collapse; width: 60%; margin-bottom: 50px; text-align: center'>";

                htmls += "<tr> <td>Name</td> <td>Username </td> <td>Pass</td>";


                foreach (UserAccount userAccount in userAccounts)
                {
                    htmls += "<tr> <td>" + userAccount.Name + "</td> <td>"  + userAccount.Username + "</td>" + "<td>*********</td>";
                }

                htmls += "</table>";

                accounts.InnerHtml = htmls;
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

        protected void btnDelete_Click(object sender, EventArgs e)
        {

        }
    }
}
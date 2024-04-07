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
                showAccountLists();
            }
            else
            {
                name.InnerText = Session["name"].ToString();
                username.InnerText = Session["username"].ToString();
            }
        }

        private void showAccountLists ()
        {
            name.InnerText = Session["name"].ToString();
            username.InnerText = Session["username"].ToString();
            btnDelete.Visible = true;
            accounts.Visible = true;

            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);


            string htmls = "<h3 style='margin: 0 auto; color: var(--main-color);'>List Accounts</h3>" +
                "<table border='1' style='margin: 0 auto;border-collapse: collapse; width: 60%; margin-bottom: 50px; text-align: center'>" + 
                "<tr> <td>Name</td> <td>Username </td> <td>Pass</td>";

            var sortAccouts = userAccounts.OrderByDescending(u => u.Username).ToList();


            foreach (UserAccount userAccount in userAccounts)
            {
                htmls += "<tr> <td>" + userAccount.Name + "</td> <td>" + userAccount.Username + "</td> <td>" + userAccount.Password + "</td>";
            }

            htmls += "</table>";

            accounts.InnerHtml = htmls;
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
            Msg.InnerText = "";
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);

            int i = 0;
            foreach(UserAccount userAccount in userAccounts)
            {
                if(userAccount.Username == Session["username"].ToString() && userAccount.Password == password.Value)
                {
                    userAccount.Password = newPass.Value;
                    i = 1;
                }
            }

            if(i == 0)
            {
                Msg.InnerText = "Mật khẩu hiện tại không đúng!";
            } else
            {
                Msg.InnerText = "Đổi mật khẩu thành công";
            }

            File.WriteAllText(fileName, JsonConvert.SerializeObject(userAccounts));
            DelUser.Value = "";

        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            btnLogout.Visible = false;
            btnEdit.Visible = false;
            btnDelete.Visible = false;
            delForm.Visible = true;
        }

        protected void btnDel_Click(object sender, EventArgs e)
        {
            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);

            int i = 0;
            var userToRemove = userAccounts.FirstOrDefault(u => u.Username == DelUser.Value);

            if (userToRemove == null)
            {
                Msg.InnerText = "Không có người dùng tương ứng!";
            }
            else
            {
                Msg.InnerText = "Xóa người dùng thành công";
                userAccounts.Remove(userToRemove);
            }
            btnDelete.Visible = false;
            File.WriteAllText(fileName, JsonConvert.SerializeObject(userAccounts));
        }

        protected void btnHuy_Click(object sender, EventArgs e)
        {
            delForm.Visible = false;
            btnDelete.Visible = true;
            btnLogout.Visible = true;
            btnEdit.Visible = true;
            Msg.InnerText = "";
            DelUser.Value = "";
        }
    }
}
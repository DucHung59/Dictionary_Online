using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.IO;
using System.Runtime.CompilerServices;

namespace BTL_Web_DictionaryOnline
{
    public partial class login : System.Web.UI.Page
    {
        public string filePath = "App_Data/userAccounts/db.json";
        public class UserAccount
        {
            public string Name { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);


            string tk = Request.Form["username"];
            string mk = Request.Form["password"];


            UserAccount user = userAccounts.FirstOrDefault(a => a.Username == tk && a.Password == mk);

            if (user != null)
            {
                Session["name"] = user.Name;
                Session["username"] = user.Username;
                Session["password"] = user.Password;
                Response.Redirect("index.aspx");
            }
            else
            {
                Response.Redirect("login.html");
            }
        }
    }
}
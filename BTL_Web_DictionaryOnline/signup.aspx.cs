using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.EnterpriseServices.CompensatingResourceManager;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using static BTL_Web_DictionaryOnline.login;
using System.Xml.Linq;
using System.IO;

namespace BTL_Web_DictionaryOnline
{
    public partial class signup : System.Web.UI.Page
    {
        public string filePath = "App_Data/userAccounts/db.json";
        protected void Page_Load(object sender, EventArgs e)
        {
            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);

            UserAccount newUser = new UserAccount();

            string name = Request.Form["name"];
            string user = Request.Form["user"];
            string pass = Request.Form["pass"];
            if (!string.IsNullOrEmpty(pass) && !string.IsNullOrEmpty(name) && !string.IsNullOrEmpty (user))
            {

                newUser.Name = name;
                newUser.Username = user;
                newUser.Password = pass;
                UserAccount validate_User = userAccounts.FirstOrDefault(a => a.Username == newUser.Username);

                if (validate_User == null)
                {
                    userAccounts.Add(newUser);

                    File.WriteAllText(fileName, JsonConvert.SerializeObject(userAccounts));
                    Response.Redirect("login.html");
                }
            }
        }

        protected void btnOK_Click(object sender, EventArgs e)
        {
            Response.Redirect("signup.html");
        }
    }
}
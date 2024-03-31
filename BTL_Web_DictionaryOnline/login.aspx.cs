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
            public string Name {  get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Login_onClick(object sender, EventArgs e)
        {

            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);


            string tk = username.Value;
            string mk = password.Value;


            UserAccount user = userAccounts.FirstOrDefault(a => a.Username == tk && a.Password ==  mk);

            if (user != null)
            {
                Session["username"] = user.Name;
                Response.Redirect("index.aspx");
            } else
            {
                check.InnerText = "Đăng nhập thất bại!";
            }

        }

        protected void Signup_onClick(object sender, EventArgs e)
        {
            string fileName = Server.MapPath(filePath);

            string jsonContent = File.ReadAllText(fileName);
            List<UserAccount> userAccounts = JsonConvert.DeserializeObject<List<UserAccount>>(jsonContent);

            UserAccount newUser = new UserAccount
            {
                Name = name.Value,
                Username = user.Value,
                Password = pass.Value,
            };

            UserAccount validate_User = userAccounts.FirstOrDefault(a => a.Username == newUser.Username);

            if (validate_User != null)
            {
                check.InnerHtml = "<div> Tên đăng nhập đã tồn tại <br> Nếu là bạn vui lòng đăng nhập </div>";
            } 
            else
            {
                userAccounts.Add(newUser);

                File.WriteAllText(fileName, JsonConvert.SerializeObject(userAccounts));
            }

            name.Value = "";
            user.Value = "";
            pass.Value = "";

        }
    }
}
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="BTL_Web_DictionaryOnline.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dictionary Online - Login</title>
    <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/128/13755/13755309.png" />
    <link href="css/root.css" rel="stylesheet" />
    <link href="css/loginStyle.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server" method="post" action="index.aspx" style="display: flex">
        <div class="container">
            <div class="Message message-login">
                <h4 id="Message-Header">Welcome back!</h4>
            </div>
            <div class="login">
                <h4>Log in</h4>
                <input type="text" id="username" name="username" class="login-group input-group" runat="server" placeholder="Username..."/>
                <input type="password" id="password" name="password" class="login-group input-group" runat="server" placeholder="Password..."/>
                <label id="check" name="check" runat="server"></label>
                <input type="submit" value="Login" class="login-group btn-group" />
                <div class="vertical-bar"></div>
                <span id="Signup">Don't have an account?</span>
            </div>
            <div class="signup">
                <h4>Sign up</h4>
                <input type="text" id="name" name="name" class="login-group input-group" runat="server" placeholder="Your name..."/>
                <input type="text" id="user" name="user" class="login-group input-group" runat="server" placeholder="Username..."/>
                <input type="password" id="pass" name="pass" class="login-group input-group" runat="server" placeholder="Password..."/>
                <label id="Label1" name="check" runat="server"></label>
                <input type="submit" class="login-group btn-group" value="Sign up" />
                <div class="vertical-bar"></div>
                <span id="Login">Have an account?</span>
            </div>
        </div>
    </form>

    <script src="js/loginForm.js"></script>
</body>
</html>

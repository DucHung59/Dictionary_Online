<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="BTL_Web_DictionaryOnline.index" MasterPageFile="~/MainLayout.Master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <link href="css/indexStyle.css" rel="stylesheet" />
</asp:Content>


<asp:Content runat="server" ContentPlaceHolderID="login">
    <form class="login" action="" runat="server">
        <button class="btnLogin" ID="btnLogin" runat="server"><a href="login.aspx">Login</a></button>
        <div class="logout">
            <label name="username" id="username" runat="server"></label>
            <asp:Button text="Logout" class="btnLogin" name="btnLogout" Visible="false" ID="btnLogout" runat="server" OnClick="btnLogout_onClick" />
        </div>
    </form>
</asp:Content>


<asp:Content ContentPlaceHolderID="Content" runat="server">
    <div class="container">
        <h1>Dictionary Online</h1>
    </div>

    <div class="container">
      <div class="searchForm" method="get"  >
        <div class="group">
          <input type="text" class="input-group" placeholder="Search something here..." id="search" name="search" runat="server" />
          <button class="btnSearch" type="submit">Search</button>
        </div>
      </div>
    </div>

    <div class="">

    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="script" runat="server">
    <script src="js/search.js"></script>
</asp:Content>

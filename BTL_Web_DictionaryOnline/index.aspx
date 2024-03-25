<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="BTL_Web_DictionaryOnline.index" MasterPageFile="~/MainLayout.Master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <link href="css/indexStyle.css" rel="stylesheet" />
</asp:Content>


<asp:Content runat="server" ContentPlaceHolderID="login">
    <div class="login">
        <button class="btnLogin" ID="btnLogin" runat="server"><a href="login.aspx">Login</a></button>
        <div class="logout">
            <label name="username" id="username" runat="server"></label>
            <input type="button" value="Logout" class="btnLogin" name="btnLogout" Visible="false" ID="btnLogout" runat="server"/>
        </div>
    </div>
</asp:Content>


<asp:Content ContentPlaceHolderID="Content" runat="server">
    <div class="container">
        <h1>Dictionary Online</h1>
    </div>

    <div class="container">
      <form class="searchForm" method="get" action="index.aspx" runat="server">
        <div class="group">
          <input type="text" class="input-group" placeholder="Search something here..." id="search" name="search" runat="server" />
          <button class="btnSearch" type="submit">Search</button>
        </div>
      </form>
    </div>

    <div class="">

    </div>
</asp:Content>

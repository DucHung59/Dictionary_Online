<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Account.aspx.cs" Inherits="BTL_Web_DictionaryOnline.Account" MasterPageFile="~/MainLayout.Master"%>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <link href="css/accountStyle.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="Content" runat="server">
    <div class="container">
        <div class="container-attribute">
            <label>Name: </label>
            <label id="name" name="name" runat="server"></label>
        </div>
        <div class="container-attribute">
            <label>Username: </label>
            <label id="username" name="username" runat="server"></label>
        </div>
        <div class="container-attribute">
            <label>Password: </label>
            <label>**********</label>
        </div>
        <form class="logout" runat="server">
            <input type="button" value="Logout" runat="server" id="btnLogout" name="btnLogout" />    
        </form>
    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="script" runat="server">
</asp:Content>
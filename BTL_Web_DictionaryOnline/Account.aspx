<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Account.aspx.cs" Inherits="BTL_Web_DictionaryOnline.Account" MasterPageFile="~/MainLayout.Master" %>

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
    </div>
    <form class="editForm" runat="server">
        <asp:Button Text="Change Account" class="btn-group" name="btnLogout" ID="btnLogout" runat="server" OnClick="btnLogout_Click" />
        <asp:Button Text="Change Password" class="btn-group" name="btnChange" ID="btnEdit" runat="server" OnClick="btnEdit_Click"/>
        <asp:Button Text="Delete User" class="btn-group" name="btnDelete" Visible="false" ID="btnDelete" runat="server" onClick="btnDelete_Click"/>
        <span id="Msg" runat="server"></span>

        <div class="editForm-input" id="editForm" runat="server" visible="false">
            <input class="input-group" type="password" id="password" name="password" runat="server" placeholder="Type current password..."/>
            <input class="input-group" type="password" id="newPass" name="newPass" runat="server" placeholder="Type new password..."/>

            <div class="editForm-btn">
                <asp:Button Text="Cancel" CssClass="btn-group" CommandName="btnCancel" ID="btnCancel" runat="server" OnClick="btnCancel_Click"/>
                <asp:Button Text="Change" CssClass="btn-group" CommandName="btnSubmit" ID="btnSubmit" runat="server" OnClick="btnSubmit_Click"/>
            </div>
        </div>
    </form>
    <div id="accounts" runat="server" visible="false" style="display: flex; flex-direction:column; ">
    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="script" runat="server">
</asp:Content>

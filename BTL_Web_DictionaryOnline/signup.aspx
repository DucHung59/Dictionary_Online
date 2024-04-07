<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="BTL_Web_DictionaryOnline.signup" MasterPageFile="~/MainLayout.Master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <style type="text/css">
        .btnOK {
            background: var(--main-color);
            color: white;
            margin: 10px;
            border: none;
            cursor: pointer;
            width: 150px;
            height: 30px;
            transition: 0.3s ease;
            margin-left: 6px;
            margin-right: 6px;
        }

            .btnOK:hover {
                background: var(--sub-color);
                color: black;
            }
    </style>
</asp:Content>

<asp:Content ContentPlaceHolderID="Content" runat="server">
    <form runat="server" style="display: flex; flex-direction: column; width: 200px; align-items: center; margin: 20px auto; margin-bottom: 400px">
        <h3 style="color: var(--main-color)">Tài khoản đã tồn tại</h3>
        <asp:Button Text="OK!" runat="server" ID="btnOK" OnClick="btnOK_Click" CssClass="btnOK" />
    </form>
</asp:Content>

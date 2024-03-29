<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="BTL_Web_DictionaryOnline.index" MasterPageFile="~/MainLayout.Master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <link href="css/indexStyle.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</asp:Content>


<asp:Content runat="server" ContentPlaceHolderID="login">
    <form class="login" action="" runat="server">
        <button class="btnLogin" id="btnLogin" runat="server"><a href="login.aspx">Login</a></button>
        <div class="logout">
            <label name="username" id="username" runat="server"></label>
            <asp:Button Text="Logout" class="btnLogin" name="btnLogout" Visible="false" ID="btnLogout" runat="server" OnClick="btnLogout_onClick" />
        </div>
    </form>
</asp:Content>


<asp:Content ContentPlaceHolderID="Content" runat="server">
    <div class="container">
        <h1>Dictionary Online</h1>
    </div>

    <div class="container">
        <div class="searchForm" method="get">
            <div class="group">
                <input type="text" class="input-group" placeholder="Search something here..." id="search" name="search" runat="server" />
                <button class="btnSearch" type="submit" id="btnSearch">Search</button>
            </div>
        </div>
    </div>

    <div class="displaySearch">
        <%--<div class="displaySearch_error">
            <label>"Sorry pal, we couldn't find definitions for the word you were looking for."</label>
            <div>
                <img src="https://images.dolenglish.vn/rs:auto:::0/w:1440/q:70/aHR0cHM6Ly9ncWVmY3B5bG9ub2JqLnZjZG4uY2xvdWQvUFVCTElDL01FRElBL25vdF9mb3VuZF9iMTJiYjlhMDI3LnBuZw==" alt="Alternate Text" />
            </div>
        </div>
        <div class="displaySearch_word">
            <label>Hello</label>
            <label class="displaySearch_word--category">VERB</label>
            <label class="displaySearch_word--category">NOUN</label>
        </div>
        <div class="displaySearch_phonetics">
            <label>/həˈloʊ/</label>
            <i class="fa-solid fa-volume-high"></i>
        </div>
        <div class="displaySearch_definition">
            <label>A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.</label>
        </div>
        <div class="displaySearch_example">
            <div class="displaySearch_example--header">
                <i class="fa-solid fa-comments"></i>
                <label>Ví dụ</label>
            </div>
            <div class="displaySearch_example--content">
                <label>1. Hello, everyone.</label>
                <label>2. Hello? Is anyone there?</label>
                <label>2. Hello? Is anyone there?</label>
                <label>2. Hello? Is anyone there?</label>
            </div>
        </div>--%>
    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="script" runat="server">
    <script src="js/search.js"></script>
</asp:Content>

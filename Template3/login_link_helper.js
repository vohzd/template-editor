function showLoginLink()
{
    var login = document.getElementById("login_link");
    if (login)
    {
        login.style.display = "inline";
    }
    var logout = document.getElementById("logout_link");
    if (logout)
    {
        logout.style.display = "none";
    }
}

function showLogoutLink()
{
    var logout = document.getElementById("logout_link");
    if (logout)
    {
        logout.style.display = "inline";
    }
    var login = document.getElementById("login_link");
    if (login)
    {
        login.style.display = "none";
    }
}

function hideLoginAndLogoutLink()
{
    var logout = document.getElementById("logout_link");
    if (logout)
    {
        logout.style.display = "none";
    }
    var login = document.getElementById("login_link");
    if (login)
    {
        login.style.display = "none";
    }
}
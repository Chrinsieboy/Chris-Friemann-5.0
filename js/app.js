// Navbars
function openNav() {
    document.getElementById("SideNavBar").style.width = "250px";
}

function closeNav() {
    document.getElementById("SideNavBar").style.width = "0";
}

// Scrolling to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("SideNavBar").style.width = "0";
}

// Scrolling to the about section
function scrollToAbout() {
    document.getElementById("About").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
}

// Scrolling to the projects section
function scrollToProjects() {
    document.getElementById("Projects").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
}

// Scrolling to the contact section
function scrollToContact() {
    document.getElementById("Contact").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
}
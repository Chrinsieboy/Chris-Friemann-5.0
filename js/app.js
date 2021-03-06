// Navbars
function openNav() {
    document.getElementById("SideNavBar").style.width = "250px";
}

function closeNav() {
    document.getElementById("SideNavBar").style.width = "0";
}

function openMobileNav() {
    document.getElementById("MobileNavbar").style.width = "100%";
}

function closeMobileNav() {
    document.getElementById("MobileNavbar").style.width = "0%";
}

// Language selection
function languageOpen() {
    document.getElementById("dropdown").classList.toggle("language-show");
}

window.onclick = function (event) {
    if (!event.target.matches('.language-dropbtn')) {
        var dropdowns = document.getElementsByClassName("language-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('language-show')) {
                openDropdown.classList.remove('language-show');
            }
        }
    }
}

function languageEnglish() {
    window.location.href = "/en";
}

function languageDutch() {
    window.location.href = "/";
}

// Scrolling to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("SideNavBar").style.width = "0";
    document.getElementById("MobileNavbar").style.width = "0";
}

// Scrolling to the about section
function scrollToAbout() {
    document.getElementById("About").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
    document.getElementById("MobileNavbar").style.width = "0";
}

// Scrolling to the projects section
function scrollToProjects() {
    document.getElementById("Projects").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
    document.getElementById("MobileNavbar").style.width = "0";
}

// Scrolling to the contact section
function scrollToContact() {
    document.getElementById("Contact").scrollIntoView();
    document.getElementById("SideNavBar").style.width = "0";
    document.getElementById("MobileNavbar").style.width = "0";
}

// Read more for the projects
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Meer Projecten";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Minder Projecten";
        moreText.style.display = "inline";
    }
}

// Hotjar Tracking Code for https://chris.friemann.nl
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 1229659, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
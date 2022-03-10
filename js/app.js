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

// Load the page in X seconds
  function loader() {
    var myVar;
    myVar = setTimeout(showPage, 1000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader2").style.display = "block";
  }
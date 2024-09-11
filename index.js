// span - black;
// p - light grey

function lightMode() {
  document.getElementById("dark_mode").style.display = "flex";
  document.getElementById("light_mode").style.display = "none";
  document.body.style.background = "black";
  document.getElementById("collection").style.background = "black";
  document.getElementById("close").style.background = "black";
  document.getElementById("dark_mode").style.color = "white";

  var elements = document.getElementsByClassName("theme");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
  }

  var theme = document.getElementsByClassName("bg_theme");
  for (let i = 0; i < theme.length; i++) {
    theme[i].style.color = "black";
    theme[i].style.backgroundColor = "white";
  }

  document.getElementById("collection").style.boxShadow =
    "rgba(255, 255, 255, 0.5) 0px 0px 2px 2px";
  document.getElementById("close").style.boxShadow =
    "rgba(255, 255, 255, 0.5) 0px 0px 2px 2px";

  var project = document.getElementsByClassName("project_div");
  for (let i = 0; i < project.length; i++) {
    project[i].style.boxShadow = "rgba(255, 255, 255, 0.5) 0px 0px 2px 2px";
  }
}

function darkMode() {
  document.getElementById("dark_mode").style.display = "none";
  document.getElementById("light_mode").style.display = "flex";
  document.body.style.background = "white";
  document.getElementById("collection").style.background = "white";
  document.getElementById("close").style.background = "white";

  var elements = document.getElementsByClassName("theme");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }

  var theme = document.getElementsByClassName("bg_theme");
  for (let i = 0; i < theme.length; i++) {
    theme[i].style.color = "white";
    theme[i].style.backgroundColor = "black";
  }

  document.getElementById("collection").style.boxShadow =
    "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  document.getElementById("close").style.boxShadow =
    "rgba(0, 0, 0, 0.35) 0px 5px 15px";

  var project = document.getElementsByClassName("project_div");
  for (let i = 0; i < project.length; i++) {
    project[i].style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  }
}

function experience_div() {
  var element = document.getElementById("placement_experience_div");
  if (element.style.display === "flex") {
    document.getElementById("arrow1").style.display = "flex";
    element.style.display = "none";
  } else {
    document.getElementById("arrow1").style.display = "none";
    element.style.display = "flex";
  }
}

function education_div() {
  var element = document.getElementById("placement_experience_div2");
  if (element.style.display === "flex") {
    document.getElementById("arrow2").style.display = "flex";
    element.style.display = "none";
  } else {
    document.getElementById("arrow2").style.display = "none";
    element.style.display = "flex";
  }
}

/*document.getElementById("home-link").addEventListener("click", function () {
  document.body.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("wysiwyg-link").addEventListener("click", function () {
  document.getElementById("wysiwyg").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("code-link").addEventListener("click", function () {
  document.getElementById("code").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact-link").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});*/

function closeButton() {
  const sideNavBar = document.getElementById("sideNavBar");
  sideNavBar.style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("collection").style.display = "none";
}

function handleMenu() {
  const sideNavBar = document.getElementById("sideNavBar");
  if (sideNavBar.style.display === "none") {
    sideNavBar.style.display = "flex";
  } else {
    sideNavBar.style.display = "none";
  }
}

document.querySelectorAll(".sideNavBar_div a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target !== "contact") {
      window.scrollTo({
        top: target.offsetTop - 5,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

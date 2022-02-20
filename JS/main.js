function Menu_pressed() {
  var menu = document.getElementById("Menu");
  var menuButtonOpen = document.getElementById("MenuButtonOpen");
  var menuButtonShow = document.getElementById("MenuButtonShow");
  var homeButton = document.getElementById("HomeButton");
  var gamesButton = document.getElementById("GamesButton");
  menu.style.visibility = "visible";
  menuButtonOpen.style.visibility = "hidden";
  menuButtonShow.style.visibility = "visible";
  homeButton.style.visibility = "visible";
  gamesButton.style.visibility = "visible";
}

function MenuShow_pressed() {
  var menu = document.getElementById("Menu");
  var menuButtonOpen = document.getElementById("MenuButtonOpen");
  var menuButtonShow = document.getElementById("MenuButtonShow");
  var homeButton = document.getElementById("HomeButton");
  var gamesButton = document.getElementById("GamesButton");
  menu.style.visibility = "hidden";
  menuButtonOpen.style.visibility = "visible";
  menuButtonShow.style.visibility = "hidden";
  homeButton.style.visibility = "hidden";
  gamesButton.style.visibility = "hidden";
}

function Home_pressed() {
  document.location.assign("https://het-best.github.io/main_page")
}

function Games_pressed() {
  document.location.assign("https://het-best.github.io/games")
}

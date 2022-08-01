document.addEventListener("DOMContentLoaded", function () {
  var modeSwitch = document.querySelector(".mode-switch");

  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
  });

  var listView = document.querySelector(".list-view");
  var gridView = document.querySelector(".grid-view");
  var projectsList = document.querySelector(".project-boxes");

  listView.addEventListener("click", function () {
    gridView.classList.remove("active");
    listView.classList.add("active");
    projectsList.classList.remove("jsGridView");
    projectsList.classList.add("jsListView");
  });

  gridView.addEventListener("click", function () {
    gridView.classList.add("active");
    listView.classList.remove("active");
    projectsList.classList.remove("jsListView");
    projectsList.classList.add("jsGridView");
  });

  document
    .querySelector(".messages-btn")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.add("show");
    });

  document
    .querySelector(".messages-close")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.remove("show");
    });
});

// var string = "welcome to this Javascript Guide!";

// var reverseEntireSentence = reverseBySeperator(string, "");
// console.log(reverseEntireSentence);

// var reverseEachWord = reverseBySeperator(reverseEntireSentence, "");
// var reverseEachWord = reverseBySeperator(reverseEntireSentence, " ");
// console.log(reverseEachWord);
// var reverseEachWordi = reverseBySeperator(reverseEachWord, " ");
// console.log(reverseEachWordi);
// var reverseEachWordie = reverseBySeperator(reverseEachWordi, " ");
// console.log(reverseEachWordie);

// function reverseBySeperator(string, seperator) {
//   return string.split(seperator).reverse().join(seperator);
// }
// console.log(reverseEachWord);

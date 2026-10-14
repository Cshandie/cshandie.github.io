const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/autopilot.png") {
    myImage.setAttribute("src", "images/copilot.jpg");
  } else {
    myImage.setAttribute("src", "images/autopilot.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Copilot is cool, ${myName}`;
  }
}

myButton.onclick = function () {
  setUserName();
};

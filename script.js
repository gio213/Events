const _initTime = Date.now();
const displayedsquareWrapper = document.querySelector(
  ".displayedsquare-wrapper"
);
let index = 0;
const actionLogSection = document.querySelector(".actionLogSection");
const actionLog = document.querySelector(".actionLogUl");
console.log(actionLog);
const body = document.querySelector("body");
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
const ulChild = document.querySelector("ul li");
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(e.target.classList);
  console.log(getElapsedTime());
  const newSquare = document.createElement("div");
  newSquare.classList.add(e.target.classList[0], e.target.classList[1]);
  displayedsquareWrapper.appendChild(newSquare);
  console.log(
    `new square added: ${e.target.classList[1]} , ${getElapsedTime()}`
  );
  newSquare.addEventListener("click", (e) => {
    alert(`${e.target.classList[1]} square`);
  });

  const actionTitle = document.createElement("h6");
  const actionTime = document.createElement("h6");
  const newAction = document.createElement("li");
  const actionDiv = document.createElement("div");
  actionDiv.appendChild(actionTime);
  actionDiv.appendChild(actionTitle);
  actionLog.appendChild(newAction);
  newAction.appendChild(actionDiv);
  actionDiv.classList.add("actionTittleDiv");
  actionTime.innerText = `[${getElapsedTime()}]`;
  actionTitle.innerText = `Created a new ${e.target.classList[1]} square`;
  index++;

  const removeAllChildFromUl = () => {
    while (actionLog.firstChild) {
      actionLog.removeChild(actionLog.firstChild);
    }
  };
  body.onkeydown = (e) => {
    if (e.key === "l") {
      removeAllChildFromUl();
    }
  };
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

body.onkeydown = (e) => {
  if (e.keyCode === 32) {
    body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
};

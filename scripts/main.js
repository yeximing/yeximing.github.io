let myImage = document.getElementById("mainpic");

myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if ((mySrc === "images/noell.jpg") | (mySrc === "images/noell_long.jpg")) {
		myImage.setAttribute("srcset", "images/hutao.jpg 1200w, images/hutao_long.jpg 600w");
		myImage.setAttribute("src", "images/hutao.jpg");
	} else {
		myImage.setAttribute("srcset", "images/noell.jpg 1200w, images/noell_long.jpg 600w");
		myImage.setAttribute("src", "images/noell.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
	let myName = prompt("请输入你的名字。");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = myName + ",我要启动";
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = storedName + ",我要启动";
}

myButton.onclick = function () {
	setUserName();
};

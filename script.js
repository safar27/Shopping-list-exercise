var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button_remove=document.createElement("Button");
	button_remove.appendChild(document.createTextNode("remove"))
	button_remove.addEventListener("click", removeElementOnClick);
	button_remove.setAttribute('id','button_remove')
	li.setAttribute('id','element')
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click",toggleDone);
	li.appendChild(button_remove);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(e){
	e.target.classList.toggle('done');
}

function removeElementOnClick() 
{
	var element=document.getElementById("button_remove");
	element.parentNode.remove();
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
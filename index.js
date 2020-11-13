//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let divQ1 = document.querySelector("#a-1"); //accessing div element from html

function createDiv() {
  // this function creates a new div element, and a button with X text.
  let newDiv = document.createElement("div");
  let buttonX = document.createElement("button");
  let buttonText = document.createTextNode(" X ");

  buttonX.appendChild(buttonText); // here I placed text to button
  newDiv.appendChild(buttonX); // button inside the new div
  divQ1.appendChild(newDiv); // new div inside the one the we access at the beggining

  newDiv.classList.add("square"); // I added a new class for new div

  newDiv.addEventListener("click", (event) => {
    // this function changes the button text from x to o and back after clicking on the button
    if (event.target.textContent == "X") {
      event.target.textContent = "O";
    } else {
      event.target.textContent = "X";
    }
  });
}
createDiv();

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

//resolve // QUESTION 2 here

const colors = ["red", "white", "black", "green", "orange", "yellow"];
// below I crete a "select" element and a button "remove" next to it
let divQ2 = document.getElementById("a-2");
let newSelect = document.createElement("select");
let buttonR = document.createElement("button");
let buttonTxt = document.createTextNode("Remove");
divQ2.appendChild(newSelect);
buttonR.appendChild(buttonTxt);
divQ2.appendChild(buttonR);

function OptionList() {
  //function creates an option list inside a select element created above
  for (let i = 0; i < colors.length; i++) {
    let option = document.createElement("option");
    option.text = colors[i];
    newSelect.add(option);
  }
}
OptionList();

function removeButton() {
  // it removes a selected option from a list
  buttonR.addEventListener("click", () => {
    let select = document.querySelector("select");
    select.options[select.selectedIndex] = null;
  });
}
removeButton();

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
let divQ3 = document.getElementById("a-3");
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let area = document.getElementById("area");

const calculate_sphere = (event) => {
  event.preventDefault();
  volume = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
  area = 4 * Math.PI * Math.pow(radius.value, 2);
  volume = volume.toFixed(2);
  area = area.toFixed(2);
  document.getElementById("volume").value = volume;
  document.getElementById("area").value = area;
};
window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.

//resolve // QUESTION 4 here
const answerArray = [divQ1, divQ2, divQ3];
const divQ4 = document.getElementById("a-4");
for (i = 0; i < answerArray.length; i++) {
  //this loop creates three button in divQ4 (id "a-4").

  let button = document.createElement("button");
  let Text = document.createTextNode(`Answer ${i + 1}`);
  button.value = i;
  button.appendChild(Text);
  divQ4.appendChild(button);
}
//adding event Listener to parent divQ4.
divQ4.addEventListener("click", (event) => {
  const x = answerArray[event.target.value]; // x holds the value of an element that user clicks

  if (x.style.display == "none") {
    // condition to show the question when it is hidden and hide when it is shown.
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

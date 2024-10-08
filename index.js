let heading =  document.getElementById("heading");

let blueBtn = document.getElementById("blueBtn");
let greenBtn = document.getElementById("greenBtn");
let redBtn = document.getElementById("redBtn");
let yellowBtn = document.getElementById("yellowBtn");
let drkMode = document.getElementById("drkMode");
let bgColorChange = document.getElementById("bgColorChange");




blueBtn.addEventListener('click', blueColor);
greenBtn.addEventListener('click', greenColor);
redBtn.addEventListener('click', redColor);
yellowBtn.addEventListener('click', yellowColor);
drkMode.addEventListener('click', drkColorMode);


function blueColor(){
    bgColorChange.style.backgroundColor = "#48cae4";
    heading.style.color="white";
}
function greenColor(){
    bgColorChange.style.backgroundColor ="#aacc00";
    heading.style.color="black";
}
function redColor(){
    bgColorChange.style.backgroundColor ="#e63946";
    heading.style.color="white";
}
function yellowColor(){
    bgColorChange.style.backgroundColor ="#ffea00";
    heading.style.color="#004e89";
   
}

function drkColorMode(){

    if (drkMode.value === "Dark Mode"){
        bgColorChange.style.backgroundColor ="#403d39";
        drkMode.value = "White Mode";
        heading.style.color="white";
       
        
    }else{
        bgColorChange.style.backgroundColor ="#ccc5b9";
        drkMode.value = "Dark Mode";
        heading.style.color="black";

    }
    
}

// function drkColorMode(){
//     if (drkMode.value === "Dark") {
//         bgColorChange.style.backgroundColor = "#403d39"; // Dark mode color
//         drkMode.value = "White"; // Change button text to "White"
//     } else {
//         bgColorChange.style.backgroundColor = "#ccc5b9"; // Light mode color
//         drkMode.value = "Dark"; // Change button text to "Dark"
//     }
// }

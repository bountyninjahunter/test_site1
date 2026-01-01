let myDate = new Date;
console.log(myDate);

/* function myAge(n1, n2){
    return n1 - n2;
}

let n1 = prompt("Enter the current year:");
let n2 = prompt("Enter your date of birth:");

alert(myAge(n1,n2));

function fibonacci(fibLen){

    let num1 = 0;
    let num2 = 1;

    for(let i = 0;i < fibLen;i++){

        let num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;

    }
}

let fibLen = prompt("Enter fibLength: ");
fibonacci(fibLen);

let text1 = "Welcome to the world. The world is safe"
let text2 = text1.replaceAll("world", "den");

console.log(text2);

console.log(document.querySelector(".top"))
*/ 


//---------------------------------------------------

let para = document.getElementById("para");
para.textContent="Changed paragraphs";
para.style.color = "green"

let img = document.querySelector(".imgy");
//img.setAttribute("src","./Images/hacker.png");

let a = document.querySelector(".linky");
a.setAttribute("href", "https://www.youtube.com");
a.innerHTML="<span>Youtube Link</span>";

const divs = document.querySelectorAll("div");
console.log(divs);

const list = document.querySelectorAll("li");

//for (i = 0; 1 < list.length; i++){
//    list[i].style.color = "purple";
//}


const ul = document.querySelector("ul");
const li1 = document.createElement("li");

ul.append(li1);

li1.innerText = "Buttercup";
li1.setAttribute("class", "top");
li1.removeAttribute("class"); 

ul.childNodes[1].style.color="green";

li1.previousElementSibling.style.color = "green";
//li1.remove();
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("You have been sent to Saturn!")
})

const imgID = document.querySelector("#imgID");

imgID.addEventListener("mouseover", () => {

    img.setAttribute("src","./Images/hacker.png");
})

imgID.addEventListener("mouseout", () => {

    img.setAttribute("src","./Images/images.png");
})
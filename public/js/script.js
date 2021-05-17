// function getURL() {
//     alert("The URL of this page is: " + window.location.href);
// }

// getURL();

var myurl= window.location.href;
// console.log(myurl);


// console.log(document.getElementsByClassName("navin"))

if(!(myurl.includes("about"))){
    var active = document.getElementsByClassName("navin");
    // console.log(active);
    active[0].style.backgroundColor= "rgba(128, 128, 128, 0.39)";
    active[1].style.backgroundColor= "rgb(245, 245, 245)";
    // console.log("matched");
    // console.log(myurl);
} else{
    var active = document.getElementsByClassName("navin");
    // console.log(active);
    active[1].style.backgroundColor= "rgba(128, 128, 128, 0.39)";
    active[0].style.backgroundColor= "rgb(245, 245, 245)"; 
    // console.log(myurl);
}

// if(myurl=="http://localhost:3000/about"){
//     console.log("kale");
// }



////////////////////////////////////////// for app //////////////////////////////////

// fetch("http://localhost:3000/weather?address=kathmandu").then((response) => {
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })


const form = document.querySelector('form');
const search = document.querySelector("input");

const msgone=document.querySelector(".message1");
const msgtwo=document.querySelector(".message2");


form.addEventListener("submit",(e) => {
    e.preventDefault();

    const location = search.value;
    // console.log(location);

    msgone.textContent = "Loading....";
    msgtwo.textContent = "";

    fetch("/weather?address="+ location).then((response) => {
    response.json().then((data)=>{
        // console.log(data);
        // console.log(data.inputcity);
        // console.log(data.temp);

        msgone.textContent = "Current Temperature of " + data.inputcity + " is ";
        msgtwo.textContent = data.temp + " Degree Celsius";

        })
    })

})

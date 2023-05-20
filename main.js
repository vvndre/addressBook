"use strict";

let arrayOfRandomUsers;

// let arrayOfRandomUsers = [];

window.onload = function(){
    fetchRandomUser();
}

const fetchRandomUser = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((address) => (arrayOfRandomUsers = address.results));
};

// const logUserArr = () => {
//     // console.log(arrayOfRandomUsers)
// }

const getName = (array) => {
  array.map((contact) => {
    const displayPerson = document.getElementById("mainContainer");
    const html = `
        <div id = "User">
            <picture>
                <img src="${contact.picture.medium}" alt = "Image of Person" class= "userImg">
                
                </img>
            </picture>

            <h2>${contact.name.first} ${contact.name.last}</h2>
        </div>
        

        `;
        displayPerson.insertAdjacentHTML("afterbegin", html)
    //insert loads html b4 js
  });
};

let displayUserData = () => {
    getName(arrayOfRandomUsers)
}
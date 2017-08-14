//ES6
/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = '<div class="card">' +
        '<h3 class="name">' + animal.name + '</h3>' +
        '<img src="' + animal.name + '.jpg" alt="' + animal.name +'" class="picture">' +
        '<div class="description">' +
            '<p class="fact">' + animal.fact + '</p>' +
            '<ul class="details">' +
                '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
                '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
                '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
                '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
            '</ul>' +
            '<p class="brief">' + animal.summary + '</p>' +
        '</div>' +
    '</div>';

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

// Output:
"<div class=\"card\"><h3 class=\"name\">Cheetah</h3><img src=\"Cheetah.jpg\" alt=\"Cheetah\" class=\"picture\"><div class=\"description\"><p class=\"fact\">Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.</p><ul class=\"details\"><li><span class=\"bold\">Scientific Name</span>: Acinonyx jubatus</li><li><span class=\"bold\">Average Lifespan</span>: 10-12 years</li><li><span class=\"bold\">Average Speed</span>: 68-75 mph</li><li><span class=\"bold\">Diet</span>: carnivore</li></ul><p class=\"brief\">Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.</p></div></div>"

//ES6-Backtick
/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name}  </h3> 
        <img src="  ${animal.name}  .jpg" alt=" ${animal.name} " class="picture"> 
        <div class="description"> 
            <p class="fact"> ${animal.fact} </p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}  </li>
                <li><span class="bold">Average Lifespan</span>:  ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li> 
                <li><span class="bold">Diet</span>:  ${animal.diet} </li> 
           </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

//Output:
"<div class=\"card\">
        <h3 class=\"name\"> Cheetah  </h3> 
        <img src=\"  Cheetah  .jpg\" alt=\" Cheetah \" class=\"picture\"> 
        <div class=\"description\"> 
            <p class=\"fact\"> Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth. </p>
            <ul class=\"details\">
                <li><span class=\"bold\">Scientific Name</span>: Acinonyx jubatus  </li>
                <li><span class=\"bold\">Average Lifespan</span>:  10-12 years</li>
                <li><span class=\"bold\">Average Speed</span>: 68-75 mph</li> 
                <li><span class=\"bold\">Diet</span>:  carnivore </li> 
           </ul>
            <p class=\"brief\"> Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat. </p>
        </div>
    </div>"
    
    
//Babel-ES5
    'use strict';

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

var cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    var cardHTML = '<div class="card">\n        <h3 class="name"> ' + animal.name + '  </h3> \n        <img src="  ' + animal.name + '  .jpg" alt=" ' + animal.name + ' " class="picture"> \n        <div class="description"> \n            <p class="fact"> ' + animal.fact + ' </p>\n            <ul class="details">\n                <li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '  </li>\n                <li><span class="bold">Average Lifespan</span>:  ' + animal.lifespan + '</li>\n                <li><span class="bold">Average Speed</span>: ' + animal.speed + '</li> \n                <li><span class="bold">Diet</span>:  ' + animal.diet + ' </li> \n           </ul>\n            <p class="brief"> ' + animal.summary + ' </p>\n        </div>\n    </div>';

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

//Output:
"<div class=\"card\">
        <h3 class=\"name\"> Cheetah  </h3> 
        <img src=\"  Cheetah  .jpg\" alt=\" Cheetah \" class=\"picture\"> 
        <div class=\"description\"> 
            <p class=\"fact\"> Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth. </p>
            <ul class=\"details\">
                <li><span class=\"bold\">Scientific Name</span>: Acinonyx jubatus  </li>
                <li><span class=\"bold\">Average Lifespan</span>:  10-12 years</li>
                <li><span class=\"bold\">Average Speed</span>: 68-75 mph</li> 
                <li><span class=\"bold\">Diet</span>:  carnivore </li> 
           </ul>
            <p class=\"brief\"> Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat. </p>
        </div>
    </div>"

// eine onload bzw. funktion zum laden aller elmente, muss noch angepasst werden 
var creators = self.crator;

function load_dish(crator) {
    var creator = creator;
    load_element(dish_name, crator);
    // load_element_pic(pic_dish)
    load_element(cooking_time1, crator);
    load_element(cooking_difficulty, crator);
    load_element(rezept_date, crator);
    load_element_table(crator);
    load_element(cooking_time2, crator);
    load_element(total_cooking_time, crator);
    load_element(preparation_instructions, crator);
    // load_element_pic(creator_pic)
    load_element(creator_name, crator);
    creators = crator;
    console.log(crator);
}

// funktion die den HTML text ändert 
async function load_element(element, crator) {
    let idName = element.id;
    let text = await load_rezept(element.id, crator);
    if (document.getElementById(idName)) {
        document.getElementById(idName).innerHTML = text;
    }
}

//funktion ladet den schlüsselwert aus dem Rezept, mit etwas Hilfe von chat GPT
async function load_rezept(key, crator) {
    let file = crator
    let id = key
    let response = await fetch(file);
    let data = await response.json();
    return data[id];
}

// funktion zum laden und berechnen der Table
async function load_element_table(crator) {
    let ingredients = await load_rezept("zutaten", crator);
    let quantitys = await load_rezept("mengen", crator);
    let i = 0;
    document.getElementById("table2").innerHTML = ""
    while (ingredients.length > i) {
        let ingredient = ingredients[i];
        let quantity = quantitys[i];
        portionen = document.getElementById("portionen").value;
        // portionen = 3;
        if (portionen === "" || isNaN(portionen)) {
            // alert("Bitte geben Sie eine Zahl im Positiven bereich zwischen 1 und 8 ein!");
            portionen = 1; // notwendig um zu vermeiden das die berechnung in js ohne wert berechnet wird 
        }
        if (isNaN(quantity) == false) {
            quantity = quantity * portionen
            document.getElementById("table2").innerHTML += "<tr><td>" + quantity + " " + ingredient + "</td ></tr >";
            i = i + 1;
        }
        else {
            document.getElementById("table2").innerHTML += "<tr><td>" + quantity + " " + ingredient + "</td ></tr >";
            i = i + 1;
        }

    }
}
// function load_element_table() {
//     let i = 0;
//     while (i < 10) {
//         document.getElementById("table").innerHTML += "<tr><td>2 Eier</td ></tr >";
//         i = i + 1;
//     }
// }


// funktion zum laden der Bilder
function load_element_pic() {
}
// code von der 
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


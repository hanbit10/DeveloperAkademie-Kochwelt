// eine onload bzw. funktion zum laden aller elmente, muss noch angepasst werden 
function load_dish(crator) {
    load_element(dish_name, crator)
    // load_element_pic(pic_dish)
    load_element(cooking_time1, crator)
    load_element(cooking_difficulty, crator)
    load_element(rezept_date, crator)
    // load_element_table(table)
    load_element(cooking_time2, crator)
    load_element(total_cooking_time, crator)
    load_element(preparation_instructions, crator)
    // load_element_pic(creator_pic)
    load_element(creator_name, crator)
}

// funktion die den HTML text ändert 
async function load_element(element, crator) {
    let idName = element.id;
    let text = await load_rezept(element.id, crator);
    document.getElementById(idName).innerHTML = text;
}

//funktion ladet den schlüsselwert aus dem Rezept, mit etwas Hilfe von chat GPT
async function load_rezept(key, crator) {
    let file = crator
    let id = key
    let response = await fetch(file);
    let data = await response.json();
    return data[id];
}

// funktion zum laden der Table
function load_element_table() {
}

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
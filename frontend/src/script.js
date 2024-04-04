async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}



function show_hide(id) {
  document.getElementById(id).classList.toggle('d-none');

}




function showMinus() {


  document.getElementById('burgerMenu').classList.replace('burger-button-minus');

}
document.getElementById("burgerMenu").addEventListener("click", showMinus);
/* function show_hide(id) {
  document.getElementById(id).classList.toggle('d-none');
  
}


 */
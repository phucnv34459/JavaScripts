const from = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descElement = document.getElementById("desc");
const categoryElement = document.getElementById("category");

window.addEventListener("DOMContentLoaded",init);

function init(){
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();

    const title = titleElement.value;
    const image = imageElement.value;
    const desc = descElement.value;
    const category = categoryElement.value;
}
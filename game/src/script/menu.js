const element = document.getElementById("menu");

export function show(value) {
    element.style.display = value ? "flex" : "none"; //Display menu
}

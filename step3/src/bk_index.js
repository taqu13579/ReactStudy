console.log("test");

const title1 = document.getElementById("title")
console.log(title1)

const title2 = document.querySelector("#title");
console.log(title2)

const containers = document.getElementsByClassName("container");
console.log(containers)

const divEl = document.createElement("div");
console.log(divEl)

const pEl = document.createElement("p")
const h2El = document.createElement("h2")

divEl.appendChild(pEl);
divEl.appendChild(h2El)
console.log(divEl)
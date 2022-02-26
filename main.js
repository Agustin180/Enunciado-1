/* VARIABLES */
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const data4 = document.getElementById("data4");

/* BOTON 1 */

const power1 = () => {
    data1.innerHTML = "Hola Mundo";
    data1.style.display = "block";
    data2.style.display = "none";
}

/* BOTON 2 */

const power2 = () => {
    data2.innerHTML = `<img src="img.png">`;
    data1.style.display = "none";
    data2.style.display = "block";
}

/* BOTON 3 */

const power3 = () => {
    data3.innerHTML += `<button class="main-button">Boton</button>`;
    data3.style.display = "block";
}

/* BOTON 4 */

const power4 = () => {
    data1.innerHTML = "";
    data2.innerHTML = "";
    data3.innerHTML = "";
}

/* EVENTOS */
document.getElementById("action1").addEventListener("click", power1);
document.getElementById("action2").addEventListener("click", power2);
document.getElementById("action3").addEventListener("click", power3);
document.getElementById("action4").addEventListener("click", power4);




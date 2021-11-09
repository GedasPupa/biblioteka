import { Biblioteka } from "./biblioteka.js";
const biblioteka = new Biblioteka();
const button_nupirkti = document.getElementById("nupirkti");
const button_pasiskolinti = document.getElementById("pasiskolinti");
const button_grazinti = document.getElementById("grazinti");
const button_rasti = document.getElementById("rasti");
const input1 = document.getElementById("pavadinimas");
const input2 = document.getElementById("autorius");
const input3 = document.getElementById("metai");
const input4 = document.getElementById("pavadinimas2");
const input5 = document.getElementById("pavadinimas3");
const input6 = document.getElementById("pavadinimas4");
const input7 = document.getElementById("check");
const output = document.getElementById("output");
// 0. Sukurti knygą.
// 1. Nusipirkti naują knygos kopiją ir ją įdėti į bibliotekos kolekciją.
button_nupirkti.addEventListener("click", () => {
    biblioteka.nupirktiKnyga(biblioteka.sukurtiKnyga(input1.value, input2.value, +input3.value));
    console.log(biblioteka.kolekcija);
    output.innerHTML = "";
    for (const iterator of biblioteka.kolekcija) {
        output.innerHTML += `${JSON.stringify(iterator)}<br>`;
    }
});
// 2. Pasiskolinti knygos kopiją iš bibliotekos. Leidžia pasiimti knygos kopiją, jeigu tokia yra.
button_pasiskolinti.addEventListener("click", () => {
    output.innerHTML = "";
    output.innerHTML = JSON.stringify(biblioteka.pasiskolintiKnyga(input4.value));
});
// 3. Grąžinti knygos kopiją į biblioteką. Leidžia grąžinti knygos kopiją, kad ji vėl taptu "Pasiekiama".
button_grazinti.addEventListener("click", () => {
    output.innerHTML = "";
    output.innerHTML = JSON.stringify(biblioteka.grazintiKnyga(input5.value));
});
// 4.  Rasti knygos kopiją
button_rasti.addEventListener("click", () => {
    const sarasas = biblioteka.rastiKnyguSarasa(input6.value, input7.checked);
    console.log(sarasas);
    output.innerHTML = "";
    for (const iterator of sarasas) {
        output.innerHTML += `${JSON.stringify(iterator)}<br>`;
    }
});

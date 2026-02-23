//Logica y conexion del api con fetch y ui
//logica navegacion

import {fetchMlp} from "./services/api.js";
import {showMlp} from "./ui/ui.js";

let current = 10;

async function loadMlp(id){
    const mlp = await fetchMlp(id);
    showMlp(mlp);
}

loadMlp(current);

document.querySelector("#next").addEventListener("click", () => {
    current++;
    loadMlp(mlp);
});

document.querySelector("#prev").addEventListener("click", () => {
    if (current >1) current--;
    loadMlp(current);
});
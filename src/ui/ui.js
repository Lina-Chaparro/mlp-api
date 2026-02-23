//Logica y vista detalle
//Exporta metodos

export function showMlp(mlp){
    if (!mlp) return;

    //datos del mlp
    document.getElementById("mlp-img").src = mlp.image;
    document.getElementById("mlp-name").textContent = capitalize(mlp.name);
    document.getElementById("mlp-id").textContent = "#" + mlp.id.toString().padStart(3, "0");

    //kinds
    const typesDiv = document.querySelector(".kinds");
    kindsDiv.innerHTML = "";
    mlp.kinds.forEach(k => {
        const span = document.createElement("span");
        span.classList.add("kind",k);
        span.textContent = capitalize(k);
        typesDiv.appendChild(span);
    });
}

function capitalize(word){
    return word.chartAt(0).toUpperCase() + word.slice(1);
}
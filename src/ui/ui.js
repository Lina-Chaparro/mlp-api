//Logica y vista detalle
//Exporta metodos

export function showMlp(mlp){
    if (!mlp) return;

    //datos del mlp
    //imagenes 
    document.getElementById("mlp-img").src = mlp.image;
    document.getElementById("mlp-bg").src = mlp.image;
    //nombre y id
    document.getElementById("mlp-name").textContent = capitalize(mlp.name);
    document.getElementById("mlp-id").textContent = "#" + mlp.id.toString().padStart(3, "0");

    //kinds
    const kindDiv = document.querySelector(".kind");
    kindDiv.innerHTML = "";
    //traigo kind e index
    mlp.kind.forEach((k, index) => {
        const span = document.createElement("span");
        span.classList.add("kind",k);
        span.textContent = capitalize(k);
        kindDiv.appendChild(span);

        //Para agregar / entre kinds omitiendo el ultimo
        if (index < mlp.kind.length - 1) {
            kindDiv.append("  ");
        }
    });
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
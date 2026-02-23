//Metodos
// # para id
// . para clase

import Mlp from "../models/Mlp.js";

const API_URL = "http://ponyapi.net/v1/";
export async function fetchMlp(id){
    try{
        const res =await fetch (API_URL + id);
        if (!res.ok) throw new Error("No se encontró el pony");
        const data= await res.json();

        //Extraer kinds
        const kinds = data.kinds.map(k => k.kinds.name);

        //instance
        return new Mlp(
            data.id,
            data.name,
            kinds,
            data.image.other["official-artwork"].front_default
        );

    }catch (error) {
        console.error(error);
        return null;
    }
}

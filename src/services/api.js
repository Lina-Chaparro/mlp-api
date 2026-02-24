//Metodos
// # para id
// . para clase

import Mlp from "../models/Mlp.js";

const API_URL = "https://ponyapi.net/v1/character/";
export async function fetchMlp(id){
    try{
        const res =await fetch (API_URL + id);
        if (!res.ok) throw new Error("No se encontró el pony");
        const data= await res.json();

        const pony = data.data[0];
        //mlp lo pone dentro de un array, por eso se accede
        //al primer elemento dentro de data asi solo haya uno

        //instance
        return new Mlp(
            pony.id,
            pony.name,
            pony.kind,
            pony.image[0]
        );

    }catch (error) {
        console.error(error);
        return null;
    }
}

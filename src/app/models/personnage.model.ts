import { Acteur } from "./acteur.model";
import { Deserializable } from "./deserializable.model";
import { Film } from "./film.model";

export class Personnage implements Deserializable{
    noFilm?:number;
    noAct?: number;
    nomPers?:string;
    acteur?:Acteur;
    film?:Film;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        if(input.acteur)
        this.acteur = new Acteur().deserialize(input.acteur)
        if(input.film)
        this.film = new Film().deserialize(input.film)
        return this;
    }
}
import { Deserializable } from "./deserializable.model";

export class Personnage implements Deserializable{
    idFilm?:number;
    idAct?: number;
    nomPers?:string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
import { Categorie } from "./categorie.model";
import { Deserializable } from "./deserializable.model";

export class Film implements Deserializable{
    id?:number;
    title?: string;
    description?: string;
    imageUrl?:string;
    type?:string;
    categorie?:Categorie
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.categorie = new Categorie().deserialize(input.categorie)
        return this;
    }
}
import { Deserializable } from "./deserializable.model";

export class Categorie implements Deserializable{
    id?:number;
    libelle?: string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
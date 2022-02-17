import { Deserializable } from "./deserializable.model";

export class Categorie implements Deserializable{
    codeCat?:number;
    libelleCat?: string;
    image? : string
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
import { Deserializable } from "./deserializable.model";

export class Categorie implements Deserializable{
    codeCat?:string;
    libelleCat?: string;
    image? : string
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
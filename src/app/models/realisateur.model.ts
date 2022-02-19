import { Deserializable } from "./deserializable.model";

export class Realisateur implements Deserializable{
    noRea?:number;
    nomRea?: string;
    prenRea?:string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
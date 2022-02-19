import { Deserializable } from "./deserializable.model";

export class Acteur implements Deserializable{
    noAct?:number;
    nomAct?: string;
    prenAct?:string;
    dateNaiss?:Date;
    dateDeces?:Date;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
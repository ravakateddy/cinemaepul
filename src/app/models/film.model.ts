import { Deserializable } from "./deserializable.model";

export class Film implements Deserializable{
    title?: string;
    description?: string;
    imageUrl?:string;
    type?:string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
import {Deserializable} from "./deserializable.model";

export class Animateur implements Deserializable {
    id: number;
    public firstname: string;
    public lastname: string;
    public profession: string;
    
    
    deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

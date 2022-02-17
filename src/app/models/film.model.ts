import { Categorie } from "./categorie.model";
import { Deserializable } from "./deserializable.model";
import { Realisateur } from "./realisateur.model";

export class Film implements Deserializable{
    public noFilm?: number
    public titre?: string
    public duree?: number
    public dateSortie?: Date
    public budget?: number
    public montantRecette?: number
    public codeCat?: number
    public noRea?: number 
    public urlImage?: string
    public titleImage?: string
    public videoTrailer?: string
    public realisateur?: Realisateur
    public categorie?: Categorie
    

    deserialize(input: any): this {
        
        Object.assign(this, input);

        this.realisateur = new Realisateur().deserialize(input.realisateur)
        this.categorie = new Categorie().deserialize(input.categorie)
        return this;
        
    }
}

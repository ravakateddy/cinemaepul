import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Acteur } from '../models/acteur.model';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.scss']
})
export class FormActorComponent implements OnInit {
  private acteur: Acteur = new Acteur();
  acteurForm: FormGroup = new FormGroup({});
  constructor(private acteurService:ActeurService) { }

  ngOnInit(): void {
    this.acteurForm = new FormGroup({
      nomAct: new FormControl(this.acteur.nomAct, [Validators.required]),
      prenAct: new FormControl(this.acteur.prenAct, [Validators.required]),
      dateNaiss: new FormControl(this.acteur.dateNaiss, [Validators.required]),
      dateDeces: new FormControl(this.acteur.dateDeces, [Validators.required]),
    })
  }

  save(){
    this.acteur = new Acteur().deserialize(this.acteurForm.value)
    this.acteurService.addActeur(this.acteur).subscribe(acteur=>{})
  }

}

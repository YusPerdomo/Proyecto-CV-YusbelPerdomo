import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from '../model/persona.model';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona=new persona("","","");


  constructor(public personaServicio:PersonaService) { }

  ngOnInit(): void {
    this.personaServicio.getPersona().subscribe(data=>(this.persona=data))

  }
}

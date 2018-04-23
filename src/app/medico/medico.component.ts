import { Component, OnInit } from '@angular/core';
import {HospitalService} from './../hospital.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  public prescricoes;
  constructor(private _hospitalSerivce: HospitalService) { }

  ngOnInit() {
  	this.getPrescricao();
  }

  getPrescricao() {
   this._hospitalSerivce.getPrescricao().subscribe(
      data => { this.prescricoes = data},
      err => console.error(err),
      () => console.log('done loading prescricoes')
    );
  }

}

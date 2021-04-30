import { Component, OnInit } from '@angular/core';
//importar modelos
import {Personas_Fisicas} from '../../models/personas_fisicas';
import {Registrar} from '../../models/registar';

//Importar servicios
import {ClienteService} from '../../service/clientes.service';

import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [ClienteService
            ]
})
export class RegistrarComponent implements OnInit {

  public persona: Registrar;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
  	private _clienteService: ClienteService,
  	) {
  	this.persona = new Registrar('','','','','',0);
  }

  ngOnInit() {
    /*if(!JSON.parse(localStorage.getItem('usuario'))){
      this._router.navigate(['/']);
    }*/
  }
  onSubmit(form){
    console.log(this.persona)
    this._clienteService.registrarCliente(this.persona).subscribe(
      response =>{
        console.log(response);
          },
          error=>{
            console.log(<any>error);
          }
        );
      this._router.navigate(['lista']);
    
  }
}
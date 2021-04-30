import { Component, OnInit } from '@angular/core';
//MOdelos
import {Personas_Fisicas} from '../../models/personas_fisicas';
import {Mostrar} from '../../models/mostar';

//Servicios
import {ClienteService} from '../../service/clientes.service';
import { Router,ActivatedRoute,Params} from '@angular/router';


import {Global} from '../../service/global';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ClienteService
              ]
})
export class ListaComponent implements OnInit {
  public personas_fisicas:Personas_Fisicas[];
  public filtro:Personas_Fisicas[];
  public todos:Personas_Fisicas[];
	public url:string;
  public texto:string;
  public mostrar:Mostrar;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  	) { 
      this.url=Global.url;
      this.todos=[];
      this.mostrar = new Mostrar(0,'','','','','');
  }

  ngOnInit() {
    /*if(!JSON.parse(localStorage.getItem('usuario'))){
      this._router.navigate(['/']);
    }*/
  	this.getClientes();
  }

  getClientes(){
  	this._clienteService.getClientes().subscribe(
  		response=>{
        this.personas_fisicas=response;
        this.filtro=response;
        for(let persona of this.personas_fisicas){
          this.mostrar['idPersonaFisica']=persona['idPersonaFisica'];
          this.mostrar['nombre']=persona['nombre'];
          this.mostrar['apellidoPaterno']=persona['apellidoPaterno'];
          this.mostrar['apellidoMaterno']=persona['apellidoMaterno'];
          this.mostrar['rfc']=persona['rfc'];
          this.mostrar['fechaRegistro']=persona['fechaRegistro'];
          this.todos.push(JSON.parse(JSON.stringify(this.mostrar)));
          this.personas_fisicas=this.todos;
        }
  		},
  		error=>{
  			console.log('Error');
  			console.log(<any>error);
  		}
    );
  }
  filtrar(form){
    this.personas_fisicas=[];
    let palabra=this.texto.toLowerCase();
    for(let fil of this.todos){
      let Nombre=fil['nombre'].toLowerCase();
      if(Nombre.indexOf(palabra)!==-1){
          this.personas_fisicas.push(fil);
      }
    }
    console.log(this.personas_fisicas);
  }
  Eliminar(id){
    this._clienteService.deleteCliente(id).subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(<any>error);
    });
  }
}

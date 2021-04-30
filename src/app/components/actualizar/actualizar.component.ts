import { Component, OnInit } from '@angular/core';
import {Personas_Fisicas} from '../../models/personas_fisicas';
import {ClienteService} from '../../service/clientes.service';
import {Global} from '../../service/global';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
  providers:[ClienteService]
})
export class ActualizarComponent implements OnInit {

	public persona:Personas_Fisicas;
	public url:string;
	public save_cliente;
	public _id:string;

  constructor(
  	private _clienteService:ClienteService,
  	private _route: ActivatedRoute,
  	private _router: Router
  	) {
  	this.url=Global.url;
  }

  ngOnInit() {
    /*if(!JSON.parse(localStorage.getItem('usuario'))){
      this._router.navigate(['/']);
    }*/
  	this._route.params.subscribe(params=>{
  		let id= params.id;
  		this.getCliente(id);
  		})
  }
  getCliente(id){
  	this._clienteService.getCliente(id).subscribe(
  		response=>{
  			console.log(response);
  			this.persona=response;
  		},error=>{
  			console.log(<any>error);
  			});
  }
  onSubmit(form){
  	this._clienteService.updateCliente(this.persona).subscribe(
  		response=>{
  				console.log(response);
  				this._router.navigate(['/lista']);
  			},
  			error=>{
  				console.log(<any>error);
  			}
  		);
  }

}

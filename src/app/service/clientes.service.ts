import{Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import {Personas_Fisicas} from '../models/personas_fisicas';
import {Registrar} from '../models/registar';
import {Global} from './global';
import { from } from 'rxjs';

@Injectable()

export class ClienteService{
	public url: string;
	constructor(
		private _http: HttpClient
		){
		this.url=Global.url;
	}
	getClientes(): Observable<any>{
		let headers= new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url,{headers: headers});
	}
	getCliente(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'/'+id,{headers: headers});
	}
	registrarCliente(persona: Registrar): Observable<any>{
		let params = JSON.stringify(persona);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url,params,{headers: headers})
	}
	deleteCliente(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		
		return this._http.delete(this.url+'/'+id, {headers: headers});
	}
	updateCliente(persona): Observable<any>{
		let params = JSON.stringify(persona);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.put(this.url+'/'+persona.idPersonaFisica,params,{headers: headers});
	}
}
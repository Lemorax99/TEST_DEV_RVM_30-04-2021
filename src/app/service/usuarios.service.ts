import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Usuarios} from '../models/usuarios';
import {Global} from './global';

@Injectable()

export class UsuarioService{
	public url:string;

	constructor(
		private _http:HttpClient
		){
		this.url=Global.url;
	}
	getUsuarios(): Observable<any>{
		let headers= new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url,{headers: headers});
	}
	getUsuario(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'/'+id,{headers: headers});
	}
	registrarUsuario(usuario: Usuarios): Observable<any>{
		let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url,params,{headers: headers})
	}
	deleteUsuario(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		
		return this._http.delete(this.url+'/'+id, {headers: headers});
	}
	actualizarUsuario(usuario): Observable<any>{
		let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.put(this.url+usuario._id,params,{headers: headers});
	}
	logearUsuario(usuario):Observable<any>{
		let params=JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url,params,{headers: headers});
	}
}
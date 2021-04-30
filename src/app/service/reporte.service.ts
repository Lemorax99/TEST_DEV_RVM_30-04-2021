import{Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import {Global} from './global';
import {Token} from '../models/token';
import { from } from 'rxjs';

@Injectable()

export class ReporteService{
	public url: string;
	constructor(
		private _http: HttpClient
		){
		this.url=Global.url;
	}
	getClientes(token :string): Observable<any>{
		let headers= new HttpHeaders().set('Content-Type','application/json').set('Authorization','Bearer '+token);

		return this._http.get("https://api.toka.com.mx/candidato/api/customers/",{headers: headers});
	}
    getToken(usuario : Token):Observable<any>{
        let params = JSON.stringify(usuario);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post("https://api.toka.com.mx/candidato/api/login/authenticate",params,{headers: headers})
    }
}
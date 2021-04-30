import { Component,OnInit } from '@angular/core';
import {Usuarios} from './models/usuarios';
import {UsuarioService} from './service/usuarios.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService]
})
export class AppComponent implements OnInit{
  title = 'Oficina';
  public login:boolean;
  public usuario:Usuarios;
  public save_usuario:Usuarios;
  public pagina:number;
  public password:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _usuarioService: UsuarioService
    ){
    this.login=false;
    
    this.usuario=new Usuarios('','','','','');
    this.save_usuario= new Usuarios('','','','','');
    this.pagina=1;
    this.password='';
  }
  ngOnInit(){
    //Borrar this.login=true; Para seguir trabajando-----------------------------------------------------------------
    this.login=true;
  }
}

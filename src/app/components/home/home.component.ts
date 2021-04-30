import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ReporteService} from '../../service/reporte.service';
import {Token} from '../../models/token';
import {Reporte} from '../../models/reportes';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ReporteService]
})
export class HomeComponent implements OnInit {
      public usuario:Token;
      public datos:Reporte[];
      public repor:Reporte;
      public todos:Reporte[];
      
  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
    private _reporteService:ReporteService
  ) {
    this.usuario=new Token("","");
    this.repor=new Reporte(0,'','','','','','','','',0);
   }

  ngOnInit() {
    /*if(!JSON.parse(localStorage.getItem('usuario'))){
      this._router.navigate(['/']);
    }*/
    this.Token();
  }
  Token(){
    localStorage.clear();
    this.usuario.Username="ucand0021";
    this.usuario.Password="yNDVARG80sr@dDPc2yCT!";
    this._reporteService.getToken(this.usuario).subscribe(response=>{
      localStorage.setItem('Token',response['Data']);
    },error=>{
      console.log(<any>error);
    });
    this._reporteService.getClientes(localStorage.getItem('Token')).subscribe(res=>{
      this.datos = res['Data'];
  },error=>{
    console.log(<any>error);
  });
  }

}


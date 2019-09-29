import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-agilidad-aritmetica-listado',
  templateUrl: './agilidad-aritmetica-listado.component.html',
  styleUrls: ['./agilidad-aritmetica-listado.component.css']
})
export class AgilidadAritmeticaListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;

  constructor(public servicioJuego: JuegoServiceService) {
    this.listadoParaCompartir = new Array<any>()
   }

  ngOnInit() {
    this.listadoParaCompartir=this.servicioJuego.inicializarLista();   
  }

  
  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    console.info("en app",this.listadoParaCompartir);
     this.servicioJuego.cargarLista(this.listadoParaCompartir);   
  }

}

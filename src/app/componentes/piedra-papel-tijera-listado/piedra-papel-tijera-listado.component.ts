import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-piedra-papel-tijera-listado',
  templateUrl: './piedra-papel-tijera-listado.component.html',
  styleUrls: ['./piedra-papel-tijera-listado.component.css']
})
export class PiedraPapelTijeraListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;

  constructor(public servicioJuego: JuegoServiceService) {
    this.listadoParaCompartir = new Array<any>();
   }

  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.inicializarLista();
  }

  tomarJuegoTerminado(juego: Juego) {
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.cargarLista(this.listadoParaCompartir);
  }


}

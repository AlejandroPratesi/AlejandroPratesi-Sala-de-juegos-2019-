import { Component, OnInit } from '@angular/core';
import { Juego} from '../../clases/juego';
import { JuegoServiceService} from '../../servicios/juego-service.service';

@Component({
  selector: 'app-adivina-el-numero-listado',
  templateUrl: './adivina-el-numero-listado.component.html',
  styleUrls: ['./adivina-el-numero-listado.component.css']
})
export class AdivinaElNumeroListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;

  constructor(public servicioJuego: JuegoServiceService) {
    this.listadoParaCompartir = new Array<any>();
   }

  ngOnInit() {
    this.listadoParaCompartir=this.servicioJuego.inicializarLista();
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
   // console.info("en app",this.listadoParaCompartir);
    this.servicioJuego.cargarLista(this.listadoParaCompartir);    
  }

}

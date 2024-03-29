import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoTaTeTi } from '../../clases/juego-tateti';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {
  nuevoJuego: JuegoTaTeTi;
  isEnd: boolean = false;
  thinking: boolean = false;
  juegoService: JuegoServiceService;

  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  constructor(juegoService: JuegoServiceService) {
    this.nuevoJuego = new JuegoTaTeTi("Tateti",false,"Anonimo");
    this.juegoService = juegoService;
  }

  play(position: string) {
    if (!this.isEnd && this.nuevoJuego.gano != null && !this.thinking) {
      let moveDone = false;
      if (position == '1' && this.nuevoJuego.spot1 == '') {
        this.nuevoJuego.spot1 = 'cross';
        moveDone = true;
      } else if (position == '2' && this.nuevoJuego.spot2 == '') {
        this.nuevoJuego.spot2 = 'cross';
        moveDone = true;
      } else if (position == '3' && this.nuevoJuego.spot3 == '') {
        this.nuevoJuego.spot3 = 'cross';
        moveDone = true;
      } else if (position == '4' && this.nuevoJuego.spot4 == '') {
        this.nuevoJuego.spot4 = 'cross';
        moveDone = true;
      } else if (position == '5' && this.nuevoJuego.spot5 == '') {
        this.nuevoJuego.spot5 = 'cross';
        moveDone = true;
      } else if (position == '6' && this.nuevoJuego.spot6 == '') {
        this.nuevoJuego.spot6 = 'cross';
        moveDone = true;
      } else if (position == '7' && this.nuevoJuego.spot7 == '') {
        this.nuevoJuego.spot7 = 'cross';
        moveDone = true;
      } else if (position == '8' && this.nuevoJuego.spot8 == '') {
        this.nuevoJuego.spot8 = 'cross';
        moveDone = true;
      } else if (position == '9' && this.nuevoJuego.spot9 == '') {
        this.nuevoJuego.spot9 = 'cross';
        moveDone = true;
      }
      if (moveDone) {
        this.verificar();
        if (!this.isEnd) {
          this.thinking = true;
          let that = this;
          let time = Math.floor((Math.random() * 1000) + 100);
          setTimeout(function () {
            that.thinking = false;
            that.nuevoJuego.botPlays();
            that.verificar();
          }, time);
        }
      }
    }
  }

  verificar() {
    this.isEnd = this.nuevoJuego.verificar();
    if (this.isEnd) {
      if (!this.nuevoJuego.gano) {
        if (this.nuevoJuego.nivel > 1) {
          this.register();
        }
        this.nuevoJuego.nivel = 1;
      } else {
        this.nuevoJuego.nivel++;
      }
    }
  }

  start() {
    this.nuevoJuego.reset();
  }

  ngOnInit() {
  }

  closeModal() {
    this.isEnd = false;
    this.nuevoJuego.gano = null;
  }

  register() {
    let objeto: { juego: string, nivel: number, tiempo: number } = {
      juego: 'TicTacToe',
      nivel: this.nuevoJuego.nivel,
      tiempo: 0
    }
    this.juegoService.cargar(objeto);
  }
}

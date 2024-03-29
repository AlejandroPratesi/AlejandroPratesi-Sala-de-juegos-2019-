import { Component,  OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegosComponent } from '../juegos/juegos.component';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego: JuegoAnagrama;
  
  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  constructor(private miServicio?: JuegoServiceService) {
    this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false);
   }

  ngOnInit() {
    this.comienzo();
  }

  
  rendirse()
  {
    this.miJuego.Rendirse();
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.miJuego);
  }

  verificar(laPalabra: string)
  {
    this.miJuego.Verificar(laPalabra);

    if(this.miJuego.contador==3 || this.miJuego.gano==true)
    {
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    console.log(this.miJuego);
    this.enviarJuego.emit(this.miJuego);
    this.miJuego.Next();
    this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false);
    }
    
  }

  jugar()
  {
    this.comienzo();
  }

  comienzo()
  {
    this.miJuego.Comenzar();
    this.miJuego.contador=0;
  }

}

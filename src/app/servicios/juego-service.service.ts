import { Injectable } from '@angular/core';
import { Juego} from '../clases/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoServiceService {

  miArray: Array<Juego>;
  unUsuario: string;

  constructor() {
    this.miArray = new Array<Juego>();
   }

   public inicializarLista(): Array<Juego>{
     return this.miArray;
   }

   public cargarLista(array: Array<Juego>) {
    this.miArray.concat(array);
  }

  public cargarUsuario(nombreUsuario: string) {
    this.unUsuario = nombreUsuario;
  }

  public retornarUsuario() {
    return this.unUsuario;
  }

  
  public cargar(objeto) {
   /*  return this.miHttp.httpPostP(this.miHttp.api + 'api/resultado/', objeto).subscribe(
      success => {
        this.peticion = success;
      }, error => {
        console.log(error);
      }); */
  }
}

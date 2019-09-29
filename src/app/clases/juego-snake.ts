
export class Snake {

    nombre: string;
    jugador: string;
    gano: boolean;
    resultado: string;
    validador: boolean=false;
  
    constructor(unNombre?: string, jugador?: string, gano?: boolean) 
    { 
      this.nombre = unNombre;
      this.jugador= jugador;
      this.gano= gano;
    }

    MostrarResultado()
    {

    }
  
  }


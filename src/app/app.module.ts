import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

//Modulo de ruteo
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaElNumeroListadoComponent } from './componentes/adivina-el-numero-listado/adivina-el-numero-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AgilidadAritmeticaListadoComponent } from './componentes/agilidad-aritmetica-listado/agilidad-aritmetica-listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AnagramaListadoComponent } from './componentes/anagrama-listado/anagrama-listado.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiedraPapelTijeraListadoComponent } from './componentes/piedra-papel-tijera-listado/piedra-papel-tijera-listado.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { MenuEncabezadoComponent } from './componentes/menu-encabezado/menu-encabezado.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { MiJuegoComponent } from './componentes/mi-juego/mi-juego.component';
import { MiJuegoListadoComponent } from './componentes/mi-juego-listado/mi-juego-listado.component';
import { BestScoreManager} from './app.storage.service';


export const EXAMPLE_COMPONENTS = {
  'autocomplete-display': {
    title: 'Display value autocomplete',
    component: HomeComponent,
    additionalFiles: null,
    selectorName: null
  },
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    AdivinaElNumeroComponent,
    AdivinaElNumeroListadoComponent,
    AgilidadAritmeticaComponent,
    AgilidadAritmeticaListadoComponent,
    AnagramaComponent,
    AnagramaListadoComponent,
    PiedraPapelTijeraComponent,
    PiedraPapelTijeraListadoComponent,
    QuienSoyComponent,
    RegistrarseComponent,
    MenuEncabezadoComponent,
    JuegosComponent,
    ListadoDeResultadosComponent,
    ListadoComponent,
    AyudaComponent,
    MiJuegoComponent,
    MiJuegoListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [JuegoServiceService,BestScoreManager],
  bootstrap: [AppComponent]
})
export class AppModule { }

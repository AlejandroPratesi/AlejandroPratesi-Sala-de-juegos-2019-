import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaElNumeroListadoComponent } from './componentes/adivina-el-numero-listado/adivina-el-numero-listado.component';
import { PiedraPapelTijeraListadoComponent } from './componentes/piedra-papel-tijera-listado/piedra-papel-tijera-listado.component';
import { AnagramaListadoComponent } from './componentes/anagrama-listado/anagrama-listado.component';
import { AgilidadAritmeticaListadoComponent } from './componentes/agilidad-aritmetica-listado/agilidad-aritmetica-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MiJuegoListadoComponent } from './componentes/mi-juego-listado/mi-juego-listado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path: '404', component: PaginaNoEncontradaComponent },
  { path: 'juegos', component: JuegosComponent,
  children:
  [ {path: 'AdivinaListado' , component: AdivinaElNumeroListadoComponent}, 
    {path: 'Listado',component: ListadoComponent },
    {path: 'PPTListado' , component: PiedraPapelTijeraListadoComponent },
    {path: 'Mijuego' , component: MiJuegoListadoComponent },
     {path: 'Anagrama' , component: AnagramaListadoComponent },
    {path: 'AgilidadListado' , component: AgilidadAritmeticaListadoComponent }]
   
}, 

  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
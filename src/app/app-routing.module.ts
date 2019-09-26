import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path: '404', component: PaginaNoEncontradaComponent },
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './componentes/login/login.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { DashboardsComponent } from './componentes/niveis/adm-tec/dashboards/dashboards.component';
import { EquipeSuporteComponent } from './componentes/niveis/todos/equipe-suporte/equipe-suporte.component';
import { InformacoesComponent } from './componentes/niveis/todos/informacoes/informacoes.component';
import { GerarChamadoComponent } from './componentes/niveis/usuario/gerar-chamado/gerar-chamado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GerarChamadoComponent,
    MenuLateralComponent,
    InformacoesComponent,
    DashboardsComponent,
    EquipeSuporteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

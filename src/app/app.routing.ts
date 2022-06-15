import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { DashboardsComponent } from './componentes/niveis/adm-tec/dashboards/dashboards.component';
import { EquipeSuporteComponent } from './componentes/niveis/todos/equipe-suporte/equipe-suporte.component';
import { InformacoesComponent } from './componentes/niveis/todos/informacoes/informacoes.component';
import { GerarChamadoComponent } from './componentes/niveis/usuario/gerar-chamado/gerar-chamado.component';


const APP_ROUTES: Routes = [
  { path:'', redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'gerar-chamado', component: GerarChamadoComponent },
  { path: 'menu-lateral', component: MenuLateralComponent },
  { path: 'dashboards', component: DashboardsComponent },
  { path: 'equipe-suporte', component: EquipeSuporteComponent },
  { path: 'informacoes', component: InformacoesComponent },


];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);/*Parametro é a constante declarada a cima */

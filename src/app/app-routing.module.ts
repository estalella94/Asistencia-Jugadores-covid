import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';

const routes: Routes = [


{ path: 'login',
  component: LoginComponent
},

{ path: 'listado',
  component: ListadoComponent
},

{
  path: 'admin',
  component: AdminComponent,
  canActivate: [IsLogueadoGuard]
  },

{
  path: 'bienvenida',
  component: BienvenidaComponent
  },



// si alguien entra a la ruta por defecto quiero que vaya a listado
{
  path:'',
  redirectTo:'listado',
  pathMatch: 'full',

  },

//si alguien pone unas rutas que no estan aqui vaya a listado

{
  path:'**',
  redirectTo:'listado',
  pathMatch: 'full',

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

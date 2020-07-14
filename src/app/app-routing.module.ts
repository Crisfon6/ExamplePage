import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// modules
import {InicioComponent} from './components/inicio/inicio.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {GaleriaComponent} from './components/galeria/galeria.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {AdminComponent} from './components/admin/admin.component';
import {CrearComponent} from './components/crear/crear.component';
import {EditarComponent} from './components/editar/editar.component';

const routes: Routes = [
  {path: "inicio",component:InicioComponent},
  {path: "nosotros",component:NosotrosComponent},
  {path: "galeria",component:GaleriaComponent},
  {path: "contacto",component:ContactoComponent},
  {path: "admin",component:AdminComponent},
  {path: "admin/editar",component:EditarComponent},
  {path: "admin/crear",component:CrearComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

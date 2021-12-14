import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

const routes: Routes = [
  /**Asignamos las rutas de los componentes que creamos. */
  { path : 'padre', component: PadreComponent},
  { path : 'hijo', component: HijoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

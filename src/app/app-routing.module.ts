import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GohanComponent } from './gohan/gohan.component';
import { GokuComponent } from './goku/goku.component';
import { GotenComponent } from './goten/goten.component';


const routes: Routes = [
  /**Asignamos las rutas de los componentes que creamos. */
  { path : 'goku', component: GokuComponent},
  { path : 'gohan', component: GohanComponent},
  { path : 'goten', component: GotenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

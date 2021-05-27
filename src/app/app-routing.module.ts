import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  // path: 'dashboard => MainPagesRoutingModule'
  // path: 'auth => AuthRoutingModule'
  // path: 'medicos => MedicosRoutingModule'
  // path: 'compras => comprasRoutingModule'

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

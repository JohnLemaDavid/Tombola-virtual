import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpageComponent } from './tombola/layoutpage/layoutpage.component';
import { ListTombolaComponent } from './tombola/list-tombola/list-tombola.component';
import { RifaTombolaComponent } from './tombola/rifa-tombola/rifa-tombola.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutpageComponent,
    children: [
      { path: 'config', component: ListTombolaComponent },
      { path: 'rifa', component: RifaTombolaComponent, runGuardsAndResolvers: 'always' },
      {path:'',redirectTo:'config',pathMatch:'full'},
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

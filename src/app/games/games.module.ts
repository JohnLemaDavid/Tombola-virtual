import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { LayoutpageComponent } from './tombola/layoutpage/layoutpage.component';
import { ListTombolaComponent } from './tombola/list-tombola/list-tombola.component';
import { RifaTombolaComponent } from './tombola/rifa-tombola/rifa-tombola.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutpageComponent,
    ListTombolaComponent,
    RifaTombolaComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule
  ]
})
export class GamesModule { }

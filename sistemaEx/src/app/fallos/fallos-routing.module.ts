import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallosPage } from './fallos.page';

const routes: Routes = [
  {
    path: '',
    component: FallosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallosPageRoutingModule {}

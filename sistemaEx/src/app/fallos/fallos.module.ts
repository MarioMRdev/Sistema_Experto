// Importa lo necesario, incluyendo el HttpClient
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Agrega esta importación
import { FallosPage } from './fallos.page';

@NgModule({
  declarations: [FallosPage],
  imports: [
    IonicModule,
    FormsModule,  // Agrega FormsModule aquí
    CommonModule,
    RouterModule.forChild([{ path: '', component: FallosPage }]),
  ],
})
export class FallosPageModule {}

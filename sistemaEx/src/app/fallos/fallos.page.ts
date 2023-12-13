// Importa lo necesario, incluyendo el HttpClient y FormsModule
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fallos',
  templateUrl: './fallos.page.html',
  styleUrls: ['./fallos.page.scss'],
})
export class FallosPage {

  // Declaración de la variable para almacenar los síntomas
  sintomas: string = '';

  // Variable para almacenar los resultados
  resultados: any[] = [];

  // Inyecta el HttpClient en el constructor
  constructor(private http: HttpClient, private navCtrl: NavController) {}

  // Método para realizar la búsqueda
  buscarFallos() {
    // Reemplaza 'URL_DEL_BACKEND' con la URL real de tu backend FastAPI
    const urlBackend = 'http://127.0.0.1:8000/buscar_sugerencias';

    // Realiza la solicitud al backend
    this.http.post<any[]>(urlBackend, { sintomas: [this.sintomas] }).subscribe(
      (respuesta) => {
        // Almacena los resultados
        this.resultados = respuesta;
      },
      (error) => {
        // Maneja los errores aquí
        console.error(error);
      }
    );
  }
}

import { Component, HostListener } from '@angular/core';
//importamos el modelo
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  pantallachica: boolean = false;  // Controla si la pantalla es pequeña
  ngOnInit(): void {
    this.revisartamaño();
  }
   // Cambiar el estado de pantalla
   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
     this.revisartamaño();
   }
  revisartamaño() {
    this.pantallachica = window.innerWidth <= 768;
  }

}

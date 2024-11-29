import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggeado: boolean = false;
  menuabierto: boolean = false;  // Estado del menú desplegado
  pantallachica: boolean = false;  // Controla si la pantalla es pequeña
  area = {
    xMin: 250, // límite izquierdo
    xMax: 600, // límite derecho
    yMin: 0, // límite superior
    yMax: 3000  // límite inferior
  };

  constructor(
    public authservice: AuthService,
    public Rutas: Router,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    // Detecta el estado de autenticación
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggeado = true;
      } else {
        this.loggeado = false;
      }
    });

    // Detecta si la pantalla es pequeña
    this.revisartamaño();
  }

  // Cambiar el estado de pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.revisartamaño();
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    // Si deseas, puedes procesar el toque de manera similar
    const touch = event.touches[0];
    const x= touch.clientX;
    const y= touch.clientY;

    if (this.isInsideArea(x, y)) {
      this.menuabierto = false;
    }
  }

  isInsideArea(x: number, y: number): boolean {
    return x >= this.area.xMin && x <= this.area.xMax && y >= this.area.yMin && y <= this.area.yMax;
  }


  // Verifica si la pantalla es pequeña
  revisartamaño() {
    this.pantallachica = window.innerWidth <= 768;
  }

  // Alterna la visibilidad del menú
  toggleMenu() {
    this.menuabierto = !this.menuabierto;
  }

  CerrarSesion() {
    this.authservice.cerrarSesion();
    this.Rutas.navigate(["/"]);
  }

  cambiarfondo() {
    let toggle: HTMLInputElement | null = document.getElementById("toggle") as HTMLInputElement;
    let label_toggle: HTMLElement | null = document.getElementById("label_toggle") as HTMLElement;
    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle('dark', checked);
      label_toggle!.innerHTML = checked ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
  }
}

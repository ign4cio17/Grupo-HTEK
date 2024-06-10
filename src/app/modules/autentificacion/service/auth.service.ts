import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }
  //funcion para registro
  registrar(email:string, password:string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  //funcion para inicio de sesion
  iniciarSesion(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }
  //funcion para cerrar sesion
  cerrarSesion(){
    return this.auth.signOut()
  }
  //funcion para tomar un uid
  
}

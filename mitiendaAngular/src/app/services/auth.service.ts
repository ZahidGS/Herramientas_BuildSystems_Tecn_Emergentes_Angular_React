import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

//REGISTRA UN USUARIO NUEVO
registerUser(email: string, pass: string){
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
    .then(userData => resolve(userData),
       err => reject(err));
  });
}

//REVISA CREDENCIALES DE USUARIO
  loginEmailUser (email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData), 
      err => reject (err));
    })
  }

  //CIERRA SESION
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  //VERIFICA SI ESTA ACTIVO EL USUARIO
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth ));
  }

  //ACTUALIZA DATOS DEL USUARIO
  private updateUserData(user){
    const userRef : AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge:true })
  }

  //devuelve el documento que correspoda al userUid
  isUserAdmin(userUid) {
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }

}

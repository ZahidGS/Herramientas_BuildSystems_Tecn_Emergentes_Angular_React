import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }

  public email: string = '';
  public password: string = '';
  public isError = false;
  ngOnInit() {
  }

  //VALIDA EL USUARIO Y CARGA LA PAGINA PRINCIPAL
  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['principal']);
    }).catch( err => {
      console.log('El usuario o password no son correctos', err.message);
      this.isError = true;
    });
  }

//usuario user: test@gmail.com pass1: test123


//CIERRA LA SESION DEL USUARIO
  onLogout(){
    this.authService.logoutUser();
  }

}

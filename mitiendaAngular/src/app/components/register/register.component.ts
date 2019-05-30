import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/observable';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }

  @ViewChild('imageUser') inputImageUser: ElementRef;
  public email: string;
  public password: string;
  public isError = false;
  public msgError = '';

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

/*   onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if (user) {
          user.updateProfile({
            displayName: '',
            photoURL: this.inputImageUser.nativeElement.value
          }).then( () => { this.router.navigate(['admin/list-books']);
          }).catch( (error) => { console.log('error presentado', error);
          });
        }
      });
    }).catch(err => console.log('err', err.message));
  }
 */

onAddUser(){
  this.authService.registerUser(this.email, this.password)
  .then((res) => {
         this.router.navigate(['login']);
        })
  .catch(err => console.log('error al agregar', err.message));
}


  onUpload(e){
    //console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'upload/imagen.png';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()))
    .subscribe();
  }
}

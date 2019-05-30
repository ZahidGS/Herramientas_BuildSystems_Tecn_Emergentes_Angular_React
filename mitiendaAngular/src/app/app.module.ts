import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DetailComponent } from './components/detail/detail.component';

// conexion a firebase
import { environment } from '../environments/environment';


// modulos para formularios y para usar firebase
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { CarShopingService } from './services/car-shoping.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,
    CarritoComponent,
    PrincipalComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Ng2FilterPipeModule
  ],
  providers: [
    AngularFireAuth, 
    AngularFirestore,
    DataService, 
    CarShopingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

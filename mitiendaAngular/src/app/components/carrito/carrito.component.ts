import { Component, OnInit } from '@angular/core';
import { CarShopingService } from 'src/app/services/car-shoping.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  carItems : any[] = [];
  total = 0;
  loading = false;
  error:string;

//INICIA LOS SERVICIOS DEL CARRITO Y DE LOS DATOS
  constructor(
    private carShopingService: CarShopingService, 
    private dataService: DataService,
    private router: Router) { }


    //CARGA LOS PRODUCTOS DEL CARRITO
    ngOnInit() {
      this.carItems = this.carShopingService.getCarShoping();
      
      for (var i = 0; i < this.carItems.length; i++) {
        this.total += this.carItems[i].item.precio*this.carItems[i].cantidad;
      }

      console.log('datos de carshoping: ', this.carItems);
    }
  
    //REALIZA EL PAGO Y LO DESCUENTA DEL STOCK
    pagar(){
      this.loading = true;
      let itemsUp = this.carShopingService.getArticulos();
      console.log('productos restamtes: ', itemsUp);
      this.dataService.addProducts(itemsUp);
      this.router.navigate(['/principal/productos']);
    
    }
  
}

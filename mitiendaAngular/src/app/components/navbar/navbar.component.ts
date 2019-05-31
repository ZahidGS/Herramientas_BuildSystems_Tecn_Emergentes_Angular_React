import { Component, OnInit } from '@angular/core';
import { CarShopingService } from 'src/app/services/car-shoping.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  carShoping: any;
  constructor(private carShopingService : CarShopingService) { }

  //CARGA LA CUENTA DE LOS PRODUCTOS EN EL CARRITO
  ngOnInit() {
    this.carShoping = this.carShopingService.getCarShoping();
  }

}

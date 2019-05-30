import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CarShopingService } from 'src/app/services/car-shoping.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
    productoFilter: any = {nombre: ''};

    public productos: any;
    
    cantidadAdd;



    constructor(
      private carShopingService: CarShopingService, 
      private data: DataService
      ) { }
  


    ngOnInit() {
      this.productos = this.carShopingService.getArticulos();
      if (this.productos.length == 0) {
        this.data.getProducts().subscribe(item => {
          this.productos = item;
          this.carShopingService.setArticulos(this.productos);
          console.log('datos del catalogo: ', this.productos)
        })        
      }
    }


    
    agregarProducto(producto){
      if (!isNaN(this.cantidadAdd)) {
        console.log('del boton añadir', producto, 'cantidad: ', this.cantidadAdd)
        this.carShopingService.setItem(producto);
        this.carShopingService.agregarItemShoping(this.cantidadAdd);
      }
    }
  


}

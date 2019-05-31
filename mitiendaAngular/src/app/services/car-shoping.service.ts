import { Injectable } from '@angular/core';

@Injectable()
export class CarShopingService {
  private item : any = {};
  private carShoping : any[] = [];
  private articulos : any[] = [];

  constructor() {}

  //ACTUALIZA ARTICULOS
  setArticulos(articulos){
    this.articulos = articulos;
  }

  //REGRESA LOS ARTICULOS
  getArticulos(){
    return this.articulos;
  }

  //ALMACENA EN CARRITO
  setItem(item){
    this.item = item;
    console.log('elemento a carrito: ', item);
    console.log('contenido del carrito', this.articulos);
  }

  //OBTIENE DATOS DEL CARRITO
  getItem() {
  	return this.item;
  }


  setCarShoping(){
    do {
      this.carShoping.pop();
    } while (this.carShoping.length > 0);
  }
  
  //AGREGA ARTICULO AL CARRITO Y DESCUENTA LA CANTIDAD DEL STOCK
  agregarItemShoping(cant){
    for (var i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].id == this.item.id){
        this.articulos[i].stock = this.articulos[i].stock - cant;
        console.log('descontado: ', this.articulos[i].stock);
      }
    }

    let encontrado = -1;
    for (var j = 0; j < this.carShoping.length; j++) {
      if(this.carShoping[j].item.id == this.item.id){
        encontrado = j;
        console.log('encontrado: ', encontrado);
      }
    }

    if(encontrado != -1){
      this.carShoping[encontrado].cantidad = this.carShoping[encontrado].cantidad + cant;
      console.log('sumando cantidad: ',this.carShoping[encontrado].cantidad);
    } else {
      this.carShoping.push({item: this.item, cantidad: cant});
      console.log('agregado: ', this.item,cant);
    }

    console.log('resultado final stock: ', this.item);
  }

  getCarShoping(){
  	return this.carShoping;
  }
}

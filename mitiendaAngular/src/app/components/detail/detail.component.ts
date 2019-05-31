import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductInterface } from 'src/app/models/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute) { }

  public product: ProductInterface;
	cantidadAdd;

  //CARGA EL PRODUCTO AL INICIO
  ngOnInit() {
    const idProduct = this.route.snapshot.params['id']; //obtiene el id de la BD por url
    this.getDetails(idProduct);
  }

  //OBTIENE EL PRODUCTO SELECCIONADO
  
  getDetails(idProduct: string): void {
    this.data.getOneProduct(idProduct).subscribe(product => {
      this.product = product;
    })
  }

  addCanasta(){}
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../models/product';


@Injectable()
export class CarShopingService {

  private comprasCollection: AngularFirestoreCollection<ProductInterface>;
  compras: Observable<ProductInterface[]>;

  private productDoc: AngularFirestoreDocument<ProductInterface>;


  constructor(private afs: AngularFirestore) {
    this.comprasCollection = afs.collection<ProductInterface>('compras');
    this.compras = this.comprasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   
  listaCompras(){
    return this.compras;
  }

  agregarProduct(product: ProductInterface) {
   //this.comprasCollection.add(product);
   console.log('del service carshoping: ', product)
 }

 eliminarProduct(product){
   this.productDoc = this.afs.doc<ProductInterface>(`carrito/${product.id}`);
   this.productDoc.delete();
 }


 editarProduct(product){
   this.productDoc = this.afs.doc<ProductInterface>(`carrito/${product.id}`);
   this.productDoc.update(product);
 }

}

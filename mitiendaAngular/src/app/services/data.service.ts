import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductInterface } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  product: Observable<ProductInterface>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<ProductInterface>('products');
    this.products = this.productsCollection.valueChanges();
   }
  
  public selectedProduct: ProductInterface = { id: null };

  //DEVUELVE TODOS LOS PRODUCTOS DE FIREBASE
  getProducts(){
    return this.products = this.productsCollection.snapshotChanges()
     .pipe( map ( changes => {
       return changes.map( action => {
         const data = action.payload.doc.data() as ProductInterface;
         data.id = action.payload.doc.id;
         return data;
       })
     }));
  }

  //OBTIENE UN PRODUCTO
  getOneProduct(idProduct: string) {

    console.log('mi id', idProduct);

    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    return this.product = this.productDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ProductInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }


//AGREGA UN PRODUCTO 

addProducts(data): void {
  console.log('en data service llega: ', data);
  //this.productsCollection.add(data);
}


/*   
  addProduct(product: ProductInterface): void {
    this.productsCollection.add(product);
  }

  deleteProduct(idProduct: string): void {
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.delete();
  }
  
 */

}

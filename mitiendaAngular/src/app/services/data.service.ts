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


/*   updateProduct(data){
  	let datos = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  	return this.http.post('./articulos/update', datos, {headers: headers}).pipe(map((response: Response) => response.json()))
  }
 */

/* 
  updateProduct(product: ProductInterface): void {
    let idProduct = product.id;
    this.productDoc = this.afs.doc<ProductInterface>(`products/${idProduct}`);
    this.productDoc.update(product);
  }

 */

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

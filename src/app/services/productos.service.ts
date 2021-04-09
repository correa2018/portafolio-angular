import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http:HttpClient) {
      this.cargarProductos();
   }

   private cargarProductos(){
     this.http.get('https://angular-html-517b4-default-rtdb.firebaseio.com/productos_idx.json')
     .subscribe((resp: Producto[]) =>{
      console.log("antes resp");
       console.log(resp);
       this.productos = resp;
       console.log("despues this");
       console.log( this.productos);
       this.cargando = false;
     })
   }
}

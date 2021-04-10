import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productos-descripcion';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto : ProductoDescripcion;
  id: string;

  constructor(private route:ActivatedRoute,
      public productosService:ProductosService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      parametros => {
         this.productosService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.producto= producto;
            this.id = parametros['id'];
          })
      }
    );

  }

}

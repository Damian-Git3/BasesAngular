import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductosService } from '../../../services/productos/productos.service';
import { IPelicula } from '../../../interfaces/pelicula.interface';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent implements OnInit {
  items: MenuItem[] | undefined;
  Array: Array<any> | undefined = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  peliculas: IPelicula[] = [];
  peliculasFiltradas: IPelicula[] = [];
  categorias: string[] = [];

  constructor(
    private productosS: ProductosService
  ) {
    this.cargarPeliculas();

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }

  cargarPeliculas() {
    this.productosS.getList().subscribe((data) => {
      this.peliculas = data;
      this.peliculasFiltradas = this.peliculas;
      this.categorias = this.obtenerTodasLasCategorias();
    });
  }

  filtrarPeliculas(event: any) {
    this.peliculasFiltradas = this.peliculas.filter((pelicula) => {
      return pelicula.titulo.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  convertirCategorias(categorias: string) {
    return categorias.split(',')
  }


  obtenerTodasLasCategorias() {
    const categorias = this.peliculas.map((pelicula) => {
      return pelicula.categorias;
    });

    const categoriasUnicas = categorias.reduce<string[]>((acc, categoria) => {
      const categorias = categoria.split(',');
      categorias.forEach((categoria) => {
        if (!acc.includes(categoria)) {
          acc.push(categoria);
        }
      });
      return acc;
    }, []);

    return categoriasUnicas;
  }

  filtrarPorCategoria(categoria: string) {
    this.peliculasFiltradas = this.peliculas.filter((pelicula) => {
      return pelicula.categorias.includes(categoria);
    });
  }
}

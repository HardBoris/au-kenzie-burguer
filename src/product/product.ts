import { ProductService, ProductType } from "./product-service";
import { bindable, autoinject } from "aurelia-framework";

@autoinject
export class Product {
  constructor(private productService: ProductService) {}

  @bindable produto: object;
  @bindable busca: string;
  @bindable item: string;
  @bindable lista: string;
  name: string;
  category: string;
  price: number;
  img: string;

  filteredProducts = [];
  currentSale = [];
  totalSale = 0;

  /* showProducts = (opcion: string) => {
    this.filteredProducts = this.products.filter(
      (item) =>
        item.category.toLowerCase() === opcion.toLowerCase() ||
        item.name.toLowerCase() === opcion.toLowerCase()
    );
  }; */
  /*
  addProduct = () => {}
*/
  /* handleClick = (productId: number) => {
    this.currentSale = [
      ...this.currentSale,
      this.products.find((item) => item.id === productId),
    ];
    this.Suma();
    console.log(this.Suma());
  }; */

  /* Suma = () =>
    (this.totalSale = this.currentSale
      .reduce((a, b) => a + b.price, 0)
      .toFixed(2)); */
}

/* export class prodValueConverter {
  toView(items: Product[], search: string) {
    if (search) {
      console.log(search);
      // return items.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
      return items.filter((ele) => console.log(ele.name));
    } else return items;
  }
} */

import { Product } from './product';
import {bindable} from "aurelia-framework"
import { ProductType } from 'product-service';

export class Searcher {
  @bindable busca: string;
}

/* export class prodValueConverter {
  toView(items: ProductType[], search: string){
    if (search) {
      console.log(search)
      return items.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
    } else return items;
  }
} */

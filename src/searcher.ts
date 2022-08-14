import { Product } from "./product";
import { bindable } from "aurelia-framework";

export class Searcher {
  @bindable busca: string;
}

/* export class prodValueConverter {
  toView(items: Product[], search: string){
    if (search) {
      console.log(search)
      return items.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
    } else return items;
  }
} */

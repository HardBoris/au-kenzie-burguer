import { autoinject, bindable } from "aurelia-framework";
import { SearcherService } from "./searcher-service";

@autoinject
export class Searcher {
  @bindable type = "text";
  @bindable label: string;
  @bindable placeholder = "";
  @bindable value: string;

  constructor(private searcher: SearcherService) {}
}

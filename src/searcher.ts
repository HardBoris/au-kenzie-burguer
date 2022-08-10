import { customElement, bindable } from "aurelia-framework";

@customElement("searcher")
export class Searcher {
  @bindable type = "text";
  @bindable label: string;
  @bindable placeholder = "";
  @bindable value: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

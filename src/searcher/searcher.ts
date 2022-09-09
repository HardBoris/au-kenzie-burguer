import {
  observable,
  autoinject,
  bindable,
  bindingMode,
} from "aurelia-framework";

@autoinject
export class Searcher {
  @bindable({ defaultBindingMode: bindingMode.twoWay })
  @observable
  field_search = null;
  @bindable type = "text";
  @bindable hint: string;
  @bindable label: string;
  isEmpty = true;
  isError = false;

  field_searchChanged(newValue) {
    if (newValue) {
      this.field_search = newValue;
      this.isEmpty = false;
    }
  }

  emptyText() {
    this.field_search = null;
    this.isEmpty = true;
  }
}

import {autoinject} from 'aurelia-framework';

@autoinject()
export class PruebaCustomAttribute {
  constructor(private element: Element) { }

  valueChanged(newValue, oldValue) {
    //
  }
}

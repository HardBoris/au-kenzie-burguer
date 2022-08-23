import { autoinject, bindable } from "aurelia-framework";

export class SearcherService {}

export interface SearcherType {
  type: string;
  label: string;
  placeholder: string;
  value: string;
}

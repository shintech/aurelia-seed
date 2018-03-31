import {inject} from 'aurelia-framework'
import {Model} from './model'

@inject(Model)

export class Models {
  constructor (private model: Model) {
    this.model = model.test
  }
}
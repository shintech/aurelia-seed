import {inject, Factory} from 'aurelia-framework'
import {Model} from './model'

interface IOption {
  id: number
  val: string
}

@inject(Factory.of(Model))
export class FormComponent {
  firstName: string
  lastName: string
  email: string
  message: string
  optional: number
  feedback: string

  private modelFactory

  constructor (modelFactory) {
    this.modelFactory = modelFactory
  }

  options: IOption[] = [
    { id: 1, val: 'option1' },
    { id: 2, val: 'option2' },
    { id: 3, val: 'option3' }
  ]

  async submitForm () {
    let response

    let newModel = this.modelFactory({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      optional: this.optional,
      message: this.message
    })

    try {
      response = await newModel.save()
    } catch (err) {
      response = err
    }

    this.feedback = `${response.status} -> ${response.statusText}`
  }
}

interface IOption {
  id: number
  val: string
}

export class FormComponent {
  firstName: string
  lastName: string
  email: string
  message: string
  optional: number = null

  options: IOption[] = [
    { id: 1, val: 'option1' },
    { id: 2, val: 'option2' },
    { id: 3, val: 'option3' }
  ]
  
  submitForm () {
    var newModel = { 
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      optional: this.optional,
      message: this.message
    }
    
    console.log(newModel);
 }
  
}
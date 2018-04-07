import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

interface IOption {
  id: number
  val: string
}

@inject(HttpClient)
export class FormComponent {
  firstName: string
  lastName: string
  email: string
  message: string
  optional: number = null

  constructor (private http: HttpClient) {
    this.http = http
  }
  
  options: IOption[] = [
    { id: 1, val: 'option1' },
    { id: 2, val: 'option2' },
    { id: 3, val: 'option3' }
  ]
  
  async submitForm () {
    let http = this.http
  
    let newModel = { 
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      optional: this.optional,
      message: this.message
    }
    
    try {
      http.fetch('/api/models', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify(newModel), 'utf-8')
        },
        method: 'POST',
        body: JSON.stringify(newModel)
      })
    } catch (err) {
      console.error(err)
    }
  }
}
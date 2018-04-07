import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)
export class Model {
  attributes

  constructor (private http: HttpClient, attributes) {
    this.http = http
    this.attributes = attributes
  }

  public async save () {
    let http = this.http
    let response

    try {
      response = await http.fetch('/api/models', {
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify(this.attributes), 'utf-8')
        },
        method: 'POST',
        body: JSON.stringify(this.attributes)
      })
    } catch (err) {
      response = {
        status: 500,
        statusText: 'Error'
      }
    }

    return Promise.resolve(response)
  }
}

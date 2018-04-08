import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)
export class Model {
  attributes

  constructor (private http: HttpClient, attributes) {
    this.http = http
    this.attributes = attributes
  }

  public save () {
    let http = this.http
    let attributes = this.attributes
    let response

    return new Promise(async function (resolve, reject) {
      try {
        response = await http.fetch('/api/models', {
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(attributes), 'utf-8')
          },
          method: 'POST',
          body: JSON.stringify(attributes)
        })

        resolve(response)
      } catch (err) {
        response = {
          status: 500,
          statusText: 'Error'
        }

        reject(response)
      }
    })
  }
}

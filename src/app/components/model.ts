import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)
export class Model {
  public data
  
  constructor (private http: HttpClient) {
    this.http = http
  }
  
  activate () {
    return this.http.fetch('/api/models')
    .then(response => response.json())
    .then(response => {
      this.data = response.body.results
    })
  }  
}

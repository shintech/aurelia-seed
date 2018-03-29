import {HttpClient} from 'aurelia-fetch-client'

let client = new HttpClient()

export class About {
  public message
  
  constructor () {
    client.fetch('/api/home')
    .then(response => response.json())
    .then(data => {
      this.message = data.body
    })
  }  
}

export class About {
  message: string 
  choice: string
  
  constructor () {
    this.message = "About"
  }
  
  dragOver (e) {
    e.preventDefault()
  }
  
  drop (e) {
    e.target.appendChild(document.getElementById(this.choice))
  }
  
  dragStart (e) {
    this.choice = e.target.id
    return true
  }
}

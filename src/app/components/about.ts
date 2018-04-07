export class AboutCustomElement {
  message: string 
  choice: string
  
  constructor () {
    this.message = "About"
  }
  
  dragOver (e) {
    e.preventDefault()
  }
  
  drop (e) {
    let id: string = e.dataTransfer.getData('id')
    e.target.appendChild(document.getElementById(id))
  }
  
  dragStart (e) {
    e.dataTransfer.setData('id', e.target.id)
    return true
  }
}

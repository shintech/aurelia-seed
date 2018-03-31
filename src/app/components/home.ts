export class Home {
  public val
  
  constructor () {
    this.val = false
  }
  
  myFunction () {
    this.val = !this.val
    console.log(`click - val = ${this.val}`)
  }
}
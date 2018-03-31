export class Home {
  constructor (public val, public isChecked) {
    this.val = false
    this.isChecked = false
  }
  
  myFunction () {
    this.val = !this.val
    
    console.log(`isChecked? = ${this.isChecked}`)
    console.log(`click - val = ${this.val}`)
  }
}
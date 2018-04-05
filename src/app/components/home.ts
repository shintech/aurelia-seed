export class Home {
  val: boolean = false
  isChecked: boolean = false
  message: string = 'message'
  
  myFunction () {
    this.val = !this.val
    
    console.log(`isChecked? = ${this.isChecked}`)
    console.log(`click - val = ${this.val}`)
  }
}
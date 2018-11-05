export default class Anteater {
  constructor(name, color) {
    this.name = name
    this.color = color
    attack()
  }
}

function attack() {
  console.log("Lick")
}
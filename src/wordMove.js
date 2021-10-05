import { getBoundary } from "./util"

export default class WordMove {
  constructor(dom, container) {
    this.times = 0
    this.$el = dom
    this.$container = container
    this.isMoveOver = false
    const { randomX, randomY } = getBoundary(dom, container)
    this.randomX = randomX
    this.randomY = randomY
    console.log('randomY', randomY)
    this.speedX = this.getSpeed()
    this.speedY = this.getSpeed()
    this.model = {
      x: 0,
      y: 0
    }
    this.animation = null
    this.registeMove()
  }
  registeMove () {
    if (this.isMoveOver) {
      return
    }
    this.model.x += this.speedX
    this.model.y += this.speedY
    this.isInnerContainer()
    if (this.times < 100) {
      this.animation = window.requestAnimationFrame(this.registeMove.bind(this))
      this.times = 0
      this.$el.style.transform = `translate(${this.model.x}px, ${this.model.y}px)`
    }
  }
  getSpeed () {
    return (Math.random() * 2 - 1)
  }
  isInnerContainer () {
    if (this.model.x < this.randomX[0] || this.model.x > this.randomX[1]) {
      this.speedX = -this.speedX
    }
    if (this.model.y < this.randomY[0] || this.model.y > this.randomY[1]) {
      this.speedY = -this.speedY
    }
  }
  stop () {
    this.isMoveOver = true
    window.cancelAnimationFrame(this.animation)
    const scale = 26 / parseInt(this.$el.style.fontSize)
    this.$el.style.transform = `translate3d(${this.model.x}px, ${this.model.y}px,5px) scale(${scale})`
    if (this.model.x < this.randomX[0] + 50 || this.model.y < this.randomY[0] + 50) {
      this.$el.style.transformOrigin = 'left top'
    }
    if (this.model.x > this.randomX[1] - 50 || this.model.y > this.randomY[1] - 50) {
      this.$el.style.transformOrigin = 'right bottom'
    }
  }
  restart () {
    this.isMoveOver = false
    this.registeMove()
  }
}
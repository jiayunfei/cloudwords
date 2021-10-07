export default class EventHandler {
  constructor(elem, ctx) {
    this.el = elem.el
    this.elem = elem
    this.ctx = ctx
    this.registHandler()
  }
  registHandler () {
    this.el.onmouseover = () => {
      this.el.style.cursor = 'pointer'
      this.elem.move.stop()
    }
    this.el.onclick = () => {
      this.el.style.cursor = 'default'
      this.ctx.onClick && this.ctx.onClick(this.elem)
    }
    this.el.onmouseleave = () => {
      this.elem.move.restart()
    }
  }
}
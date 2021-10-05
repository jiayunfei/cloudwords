export default class DomTouch {
  constructor(elem) {
    this.el = elem.el
    this.elem = elem
    this.registHandler()
  }
  registHandler () {
    this.el.onmouseover = () => {
      this.elem.move.stop()
    }
    this.el.onmouseleave = () => {
      this.elem.move.restart()
    }
  }
}
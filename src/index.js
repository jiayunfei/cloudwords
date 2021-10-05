import { proxyData } from './proxyData'
import WordMove from './wordMove'
import DomTouch from './domTouch'

export default class CloudWords {
  constructor(options = {}) {
    this.$el = this.getElement(options.el)
    this.$words = options.words
    this.$colors = options.colors
    // 是否设置触摸停止
    this.$touchStop = options.touchStop || true
    this.minSize = parseInt(options.minSize || 14)
    this.maxSize = parseInt(options.maxSize || 26)
    this.elems = []
    this.container = null
    this.createWordDoms()
  }
  getElement (el) {
    return el.nodeType === 1 ? el : document.querySelector(el)
  }
  createWordDoms () {
    this.container = document.createElement('div')
    this.container.classList.add('cloud-word-container')
    this.$words.forEach(word => {
      this.addWord(word, true)
    })
    this.$el.appendChild(this.container)
    this.setDomsMove()
  }
  // 让文本动起来
  setDomsMove () {
    this.elems.forEach(elem => {
      this.setElemMove(elem)
    })
  }
  setElemMove (elem) {
    const dom = elem.el
    elem.move = new WordMove(dom, this.$el)
    if (this.$touchStop) {
      elem.touch = new DomTouch(elem)
    }
  }
  getCssText () {
    const curColor = this.getColor()
    const curSize = this.getSize()
    return `display: inline-block; color: ${curColor}; font-size: ${curSize}px`
  }
  getColor () {
    const len = this.$colors.length
    const index = Math.floor(Math.random() * len)
    return this.$colors[index]
  }
  getSize () {
    const diff = this.maxSize - this.minSize
    const size = Math.floor(Math.random() * diff) + this.minSize
    return size
  }
  refresh () {
    this.$el.removeChild(this.container)
    this.elems = []
    this.createWordDoms()
  }
  addWord (word, isInit) {
    const dom = document.createElement('span')
    dom.textContent = word
    dom.style.cssText = this.getCssText()
    const elem = {
      el: dom
    }
    this.container.appendChild(dom)
    this.elems.push(elem)
    if (!isInit) {
      this.setElemMove(elem)
    }
  }
  removeWord (index) {
    let elem = this.elems[index]
    this.container.removeChild(elem.el)
    this.elems.splice(index, 1)
    elem = null
  }
  updateWord (index, word) {
    const elem = this.elems[index]
    elem.dom.textContent = word
  }
}
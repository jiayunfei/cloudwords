import WordMove from './wordMove'
import EventHandler from './eventHandler'
import getDefaultColors from './defaultColors'

export default class CloudWords {
  constructor(options = {}) {
    this.$el = this.getElement(options.el)
    this.$words = options.words || []
    this.$colors = options.colors || getDefaultColors()
    // 是否设置触摸停止
    this.$touchStop = options.touchStop || true
    this.minSize = parseInt(options.minSize || 14)
    this.maxSize = parseInt(options.maxSize || 26)
    if (typeof options.onClick === 'function') {
      this.onClick = options.onClick
    }
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
      elem.events = new EventHandler(elem, this)
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
      el: dom,
      word: word
    }
    this.container.appendChild(dom)
    this.elems.push(elem)
    if (!isInit) {
      this.setElemMove(elem)
      this.$words.push(word)
    }
  }
  removeWord (index) {
    let elem = this.elems[index]
    this.container.removeChild(elem.el)
    this.elems.splice(index, 1)
    this.$words.splice(index, 1)
    elem = null
  }
  updateWord (index, word) {
    this.$words[index] = word
    const elem = this.elems[index]
    elem.dom.textContent = word
    elem.word = word
  }
}
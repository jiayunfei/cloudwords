<template>
  <div class="main">
    <button @click="refresh">刷新</button>
    <input type="text" v-model="word">
    <button @click="cloudWords.addWord(word)">添加</button>
    <div id="cloudWords"></div>
  </div>
</template>

<script>
import { words, colors } from './data'
import CloudWords from '@/index'

export default {
  name: 'App',
  data () {
    return {
      cloudWords: null,
      word: ''
    }
  },
  mounted () {
    this.cloudWords = new CloudWords({
      el: '#cloudWords',
      words: words,
      colors: colors,
      minSize: 14,
      maxSize: 26,
      onClick (elem) {
        console.log(elem)
      }
    })
  },
  methods: {
    refresh () {
      this.cloudWords.refresh()
    }
  }
}
</script>

<style scoped>
#cloudWords {
  width: 300px;
  height: 300px;
  background: #000;
  border: 1px solid #f5f5f5;
}
</style>
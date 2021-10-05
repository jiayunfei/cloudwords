<template>
  <div id="cloudWords"></div>
</template>

<script>
import { words, colors } from './data'
import CloudWords from '@/index'

export default {
  name: 'App',
  data () {
    return {
      cloudWords: null
    }
  },
  mounted () {
    this.cloudWords = new CloudWords({
      el: '#cloudWords',
      words: words,
      colors: colors
    })
  }
}
</script>

<style scoped>
#cloudWords {
  width: 500px;
  height: 500px;
  background: #000;
  border: 1px solid #f5f5f5;
}
</style>
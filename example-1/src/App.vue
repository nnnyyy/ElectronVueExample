<template>
  <div id="app">
    <button @click="onExecuteNotepad()">메모장 실행</button>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {ipcRenderer} from 'electron'
@Component
export default class AppVue extends Vue {
  onExecuteNotepad() {
    ipcRenderer.send('executenote')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

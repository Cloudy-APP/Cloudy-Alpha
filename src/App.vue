<template>
  <Menu/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from './components/menu/Menu.vue'

export default defineComponent({
  components: {
    Menu
  },
  mounted () {
    document.title = 'Cloudy'
  }
})
</script>

<style lang="scss">

@import "./styles/main.scss";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body {
  font-family: 'Roboto' !important;
  text-align: center;
  background-color: #fff;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

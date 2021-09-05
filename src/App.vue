<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted () {
    document.title = 'Cloudy'
  }
})
</script>

<style lang="scss">

@import "./styles/main.scss";

body {
  font-family: 'Roboto' !important;
  text-align: center;
  background-color: $background;
}
</style>

<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Dropbox />
    <Input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dropbox from '../components/upload/Dropbox.vue'
import Input from '../components/upload/Input.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Dropbox,
    Input
  }
})
</script>

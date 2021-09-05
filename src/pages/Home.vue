<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UploadFiles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UploadFiles from '../components/UploadFiles.vue'

export default defineComponent({
  name: 'Home',
  components: {
    UploadFiles
  }
})
</script>

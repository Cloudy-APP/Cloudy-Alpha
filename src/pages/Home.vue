<template>
  <div class="home">
    <Input />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from '../components/upload/Input.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Input
  }
})
</script>

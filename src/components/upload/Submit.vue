<template>
  <button>
    Upload
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

button {
  margin:10px;
  border:none;
  background-color:$main;
  font-size:18px;
  padding:10px;
  border-radius:10px;
  cursor:pointer;
  color:$background;
}

</style>

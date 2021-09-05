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
    width:300px;
    max-width:95vw;
    margin:10px;
    border:none;
    background-color:$main;
    font-size:20px;
    padding:10px;
    border-radius:10px;
    cursor:pointer;
    color:$background;
}

</style>

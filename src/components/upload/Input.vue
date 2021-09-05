<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div>
      <p>
        Lub wybierz plik bezpośrednio z komputera
      </p>

      <label for="file">
        Choose file

        <input
        type="file"
        id="file"
        @change="selectFile"
        ref="file"
        hidden
        />

      <span class="file-name">
        {{this.file.name }}
      </span>
      </label>
    </div>
    <Submit/>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import Submit from './Submit.vue'

export default defineComponent({
  components: {
    Submit
  },
  data () {
    return {
      file: ''
    }
  },
  methods: {
    selectFile () {
      // eslint-disable-next-line
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },
    async sendFile () {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        await axios.post('/api/upload', formData)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>

<style lang="scss" scoped>

@import '../../styles/main.scss';

label {
    background: $main;
    padding:10px;
    color:#ebebeb;
    border-radius:10px;
    display: inline-block;
    cursor:pointer;
    width: 350px;
    max-width:98vw;
    font-size:18px;
    transition:0.2s all;
}

.file-name {
    display:block;
    padding:10px;
    color:$background;
    font-size:13.5px;
    font-weight: 300;
}

</style>

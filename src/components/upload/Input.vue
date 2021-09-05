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
      </label>
    </div>
    <div>
      <span class="file-name">
        {{this.file.name }}
      </span>
    </div>
    <Submit/>
  </form>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import axios from 'axios'

import Submit from './Submit.vue'

export default defineComponent({
  components: {
    Submit
  },
  data () {
    return {
      file: '',
      message: '',
      error: false
    }
  },
  methods: {
    selectFile () {
      // eslint-disable-next-line
      this.file = this.$refs.file.files[0]
      console.log(this.file)
      this.message = ''
      this.error = false
    },
    async sendFile () {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        await axios.post('http://localhost:80/api/files/upload', formData)
        this.message = 'File has been uploaded'
        this.file = ''
        this.error = false
      } catch (err) {
        console.log(err)
        this.message = 'Something went wrong'
        this.error = false
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
    color:$black;
    font-size:13.5px;
}

</style>

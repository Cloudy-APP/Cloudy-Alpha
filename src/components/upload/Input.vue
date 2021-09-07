<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">

    <div class="dropzone" :class="{'draganddrop': isDragged}" v-on:dragover="drag" v-on:dragleave="undrag" v-on:drop="undrag">
      <input
        type="file"
        @change="dropFile"
        ref="dropbox"
        class="input-field"
        multiple
      />
      <p v-if="!uploading" class="call-to-drag">
        Drag your files here
      </p>
      <p v-if="!uploading" class="progress-bar"></p>
    </div>

    <div class="filelist">
      <div class="nav">
        <div class="logo">
          <section class="cloud"></section>
          Twoje pliki
        </div>
        <div>
        <label for="files">
          Choose file

          <input
          type="file"
          @change="selectFile"
          ref="files"
          id="files"
          multiple
          hidden
          />
        </label>
      <Submit/>
      </div>

    </div>

    <div class="listitem" v-for="(file, index) in files" :key="index">
      <div>
        {{file.name}}
      </div>
      <div class="error-cont">
      <div class="error" v-if="file.invalidMessage">
        <span>!</span>{{file.invalidMessage}}
      </div>
        <a @click.prevent="files.splice(index, 1);uploadFiles.splice(index, 1)" class="delete"></a>
      </div>
    </div>
  </div>

    <div v-if="message">
      <span :class="`message ${error ? 'is-danger' : 'is-success'}`">{{message}}</span>
    </div>

     <div class="filelist">
      <div class="listitem" v-for="file in uploaded" :key="file">
      <div>
        {{file.originalname}}
      </div>
      <a :href="domain + '/files/' + file.filename" target="_blank" class="finallyyyyy">
        Get link
      </a>
    </div>
     </div>

  </form>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { domain } from '../../static/data.ts'

import Submit from './Submit.vue'

export default defineComponent({
  components: {
    Submit
  },
  data () {
    return {
      files: [],
      uploadFiles: [],
      uploaded: [],
      message: '',
      error: false,
      uploading: false,
      isDragged: false,
      domain
    }
  },
  methods: {
    selectFile () {
      const files = this.$refs.files.files
      this.uploadFiles = [...this.uploadFiles, ...files]
      this.files = [
        ...this.files,
        ..._.map(files, file => ({
          name: file.name,
          size: file.size,
          type: file.size,
          invalidMessage: this.validate(file)
        }))
      ]
    },
    dropFile () {
      const files = this.$refs.dropbox.files
      this.uploadFiles = [...this.uploadFiles, ...files]
      this.files = [
        ...this.files,
        ..._.map(files, file => ({
          name: file.name,
          size: file.size,
          type: file.size,
          invalidMessage: this.validate(file)
        }))
      ]
    },
    validate (file) {
      const MAX_SIZE = 50000000

      if (file.size > MAX_SIZE) {
        return `Max size: ${MAX_SIZE / 1000000}Mb`
      }
      return ''
    },
    async sendFile () {
      const formData = new FormData()
      _.forEach(this.uploadFiles, file => {
        if (this.validate(file) === '') {
          formData.append('files', file)
        }
      })

      try {
        await axios.post(this.domain + '/api/files/upload', formData).then(response => (this.uploaded = this.uploaded.concat(response.data.files)))
        this.message = 'Files has been uploaded'
        this.files = []
        this.uploadFiles = []
        this.error = false
      } catch (err) {
        this.message = err.response.data.error
        this.error = true
      }
    },
    drag () {
      this.isDragged = true
    },
    undrag () {
      this.isDragged = false
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
    font-size:18px;
    transition:0.2s all;
}

.file-name {
    display:block;
    padding:10px;
    color:$black;
    font-size:13.5px;
}

.is-success {
  display: inline-block;
  background-color: #d3e0d3;
  padding:10px;
  border-radius:10px;
  color: $green;
}

.filelist {
  width:1000px;
  max-width:95vw;
  background: #f8f8f8;
  margin:10px auto;
  padding:10px;
  border-radius:25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
  transition: .2 all;
}

.filelist .nav {
  display:flex;
  justify-content: space-around;
  align-items: center;
  font-size:17px;
}

.cloud {
  display:inline-block;
  padding:20px;
  margin:5px;
  background-size: cover;
  background-image:url('../../assets/cloud.png');
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 500;
}

.listitem {
  display:flex;
  align-items: center;
  justify-content:space-between;
  background-color: #4b6b7420;
  border-radius:8px;
  padding:10px;
  margin:10px;
  font-size:17px;
}

.delete {
  display:inline-block;
  padding:12px;
  margin:0 5px;
  cursor:pointer;
  background-size:75%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius:5px;
  background-image:url('../../assets/icons/delete.svg');
}

.error-cont {
  display: flex;
  align-items: center;
}

.error span {
  font-weight: 900;
  margin:0 4px;
}

.error {
  display: inline-block;
  margin:0 10px;
  border-radius:10px;
  color: $red;
}

.dropzone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color:$black;
    font-size:30px;
    padding:10px;
    width:800px;
    min-height:300px;
    max-width:90vw;
    margin:20px auto;
    border: 5px solid gray;
    border:8px outset $black;
    border-radius:10px;
    animation: dropbox-border 60s infinite;
    background: repeating-linear-gradient(
    -45deg,
    #f3f3f3,
    #f3f3f3 70px,
    #fbfbfb 70px,
    #fbfbfb 140px
    );
    transition:.5s all;
}

.input-field {
    opacity:0;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:300px;
    cursor:pointer;
}

.draganddrop {
  filter:brightness(0.8);
}

.finallyyyyy {
  text-decoration: none;
  background-color:#a4bcc2;
  color:#00647d;
  font-weight: 600;
  padding:5px 10px;
  border-radius:5px;
}

</style>

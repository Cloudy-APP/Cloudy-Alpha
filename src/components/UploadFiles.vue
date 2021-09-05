<template>
    <section
    v-on:dragover.prevent="handleDragOver"
    v-on:drop.prevent="handleDrop"
    v-on:dragleave.prevent="handleDragLeave"
    class="droparea"
    :class="{'dropactive': status.over}"
    >
        <div class="dropimg"></div>
        <p>Upuść pliki tutaj!</p>
    </section>
    <p>lub wybierz je z urządzenia</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  data () {
    return {
      file: {
        name: '',
        size: 0
      },
      status: {
        over: false,
        dropped: false
      }
    }
  },
  methods: {
    handleDragOver () {
      this.status.over = true
    },
    handleDrop () {
      this.status.dropped = true
      this.status.over = false
    },
    handleDragLeave () {
      this.status.over = false
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/main.scss';

.droparea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:$black;
    font-size:30px;
    padding:10px;
    width:800px;
    height:300px;
    max-width:90vw;
    margin:20px auto;
    border:5px outset $black;
    border-radius:10px;
    animation: dropbox-border 60s infinite;
    background: repeating-linear-gradient(
    45deg,
    #E8E8E8,
    #E8E8E8 70px,
    #E3E3E3 70px,
    #E3E3E3 140px
    );
    transition: 2s all;
}

.dropactive {
    filter: brightness(0.9);
}

.dropimg {
    padding:29.625px 37.875px;
    background-size:cover;
    background-image:url("../assets/drop.png");
}

</style>

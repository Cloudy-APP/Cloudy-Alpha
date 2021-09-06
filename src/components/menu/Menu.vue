<template>
  <nav>
    <div class="logocont">
    <div class="logo"></div>
    Cloudy
    </div>
    <ul>
      <li><router-link to="/">Features</router-link></li>
      <li><router-link to="/">Premium</router-link></li>
      <li class="smallguy"><router-link to="/">Login</router-link></li>
      <li><router-link to="/">Sign-up</router-link></li>
    </ul>
  </nav>
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

nav {
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}

.logocont {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:30px;
  font-weight: 600;
}

.logo {
  display: inline-block;
  margin:10px;
  padding:40px;
  background-size:cover;
  background-image: url('../../assets/cloud.png');
}

ul {
  display:flex;
  flex-grow:1;
}

ul .smallguy {
  margin-left:auto;
}

li a {
    color: #706f72;
    margin: 0 2vw;
    transition: color .3s;
    font-weight: 500;
}

</style>

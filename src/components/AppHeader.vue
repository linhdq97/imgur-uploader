<template>
  <div class="ui menu large">
    <div class="ui item header teal">
      Imgur Uploader
    </div>
    <div class="right menu" v-if="isLoggedIn">
      <router-link :to="{ name: 'Home' }" class="ui item">Images</router-link>
      <router-link :to="{ name: 'Upload' }" class="ui item">Upload</router-link>
      <a class="ui item" @click="logout">Logout</a>
    </div>
    <div class="right menu" v-else>
      <a class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  methods: mapActions(['login','logout']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

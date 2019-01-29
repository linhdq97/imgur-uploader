<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" :key="image.id">
    </div>
    <div v-else>
      <h2>Not logged in</h2>
      You need to be logged in to view your images.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages','isLoggedIn']),
  created() {
    this.fetchImages()
  }
}
</script>

<style>
.image-container{
  column-count: 5;
  column-gap: 0;
}
.image-container img {
  max-width: 100%;
  padding:5px;
}
@media screen and (max-width:767px){
  .image-container{
    column-count: 3;
    column-gap: 0;
  }
}
</style>

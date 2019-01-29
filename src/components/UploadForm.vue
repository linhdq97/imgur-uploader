<template>
  <div>
    <div class="loading" v-if="isUploading">
      <span>
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <div>Uploading image(s), please hold on...</div>
      </span>
    </div>
    <div class="dropper" v-else>
      <input 
        type="file" 
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*">
      <span>Click here, or drag and drop your images here to upload!</span>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages']),
  computed: mapGetters(['isUploading'])
}
</script>

<style>
  .dropper {
    height: 30vh;
    border: 2px dashed #666;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropper:hover {
    background-color:#d4f1f0;
  }
  .dropper input{
    position: absolute;
    width:100%;
    height: 30vh;
    opacity: 0;
  }
  .loading {
    height: 30vh;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:teal;
    color: #fff;
  }
  .lds-ripple {
    display: block;
    position: relative;
    margin:0 auto;
    width: 64px;
    height: 64px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
</style>

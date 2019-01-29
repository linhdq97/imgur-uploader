import Router from 'vue-router'
import Vue from 'vue'
import AuthHandler from '@/components/AuthHandler'
import ImageList from '@/components/ImageList'
import UploadForm from '@/components/UploadForm'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  linkActiveClass: 'regular-active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ImageList
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadForm
    },
    {
      path: '/oauth2/callback',
      name: 'AuthHandler',
      component: AuthHandler
    }
  ]
})

import api from '@/api/imgur'
import router from '@/router'

const state = {
  images: [],
  uploading: false
}

const getters = {
  allImages: state => state.images,
  isUploading: state => state.uploading
}

const actions = {
  async fetchImages ( { rootState, commit } ) {
    const { token } = rootState.auth
    if (token) {
      const response = await api.fetchImages(token)
      commit('setImages', response.data.data)
    }
  },
  async uploadImages ( { rootState, commit }, images) {
    const { token } = rootState.auth
    commit('setUploading')
    await api.uploadImages(images, token)
    commit('setUploading')
    router.push({ name: 'Home' })
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  },
  setUploading: (state) => {
    state.uploading = !state.uploading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

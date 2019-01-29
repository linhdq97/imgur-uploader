import Qs from 'qs'
import Axios from 'axios'

const CLIENT_ID = 'xxxxxxxxxxxxxxx'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login () {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${Qs.stringify(querystring)}`
  },
  fetchImages (token) {
    return Axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages (images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData()
      formData.append('image', image)

      return Axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    return Promise.all(promises)
  }
}

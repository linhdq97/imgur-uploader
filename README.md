# Imgur Uploader

An image uploader for Imgur, using the Imgur API for OAuth and uploading images. Build in Vue.js, using Vuex and Vue-Router.

---

## Demo
<a href="https://imgur-uploader.oskarnijs.nl">Demo site</a>

---

## Imgur API
Register the app on the imgur API and setup the client id in src/api/imgur.js<br>
https://api.imgur.com/oauth2/addclient<br>
This can be changed later by visiting:<br>
https://imgur.com/account/settings/apps

<b>Authorization type:</b><br>
OAuth 2 authorization with a callback URL

<b>Authorization callback URL:</b><br>
https://www.yoursite.com/oauth2/callback<br>
Can be http://localhost:8080 for Dev purposes.

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

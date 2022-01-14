import Cookies from 'js-cookie'
export default {
    baseURL: 'https://google.com/',
    fileURL: 'http://111.123.112.111:50/',

    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false }
      ]
   
}

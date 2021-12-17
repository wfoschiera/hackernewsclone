<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ApiNews from '@/api/news.api.js'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {},
  created() {
    console.log('Cheguei')
    ApiNews.list().then((data) => {
      console.log('opa', data)
    })
  },
}
</script>

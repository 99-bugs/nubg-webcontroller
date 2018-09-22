<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title" class="center-align"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>99bugs &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: 'Nubg Web Controller'
    }
  }
}
</script>

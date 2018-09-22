<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title v-text="title" class="center-align"></v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-content>
        <Registration v-show="!tankName" @registerName="setName"/>
        <Controller v-show="tankName"  v-bind:tankName="tankName"/>
      </v-content>
    </v-container>
    <v-footer :fixed="fixed" app>
      <span>99bugs &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Controller from './components/Controller'
import Registration from './components/Registration'

export default {
  name: 'App',
  components: {
    Controller,
    Registration
  },
  data () {
    return {
      title: 'Nubg Web Controller',
      tankName: null
    }
  },
  methods: {
    setName (name) {
      this.tankName = name;
    }
  }
}
</script>

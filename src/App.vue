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
    <v-footer app>
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
  created: function (){
    // this.$mqtt.subscribe('test/nubg/devgame/gamestate')
  },
  mqtt: {
    'test/nubg/devgame/gamestate': function(message) {
    //  console.log("received from mqtt: test/nubg/devgame/gamestate", message)
    }
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
      let registrationData = {name: this.tankName}
      
      this.$mqtt.publish('test/nubg/join', JSON.stringify(registrationData))
    }
  }
}
</script>

<template>
  <v-slide-y-transition>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Tank registration</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              label="Tank name"
              v-model="name"
            ></v-text-field>
            <v-btn color="success" @click="onRegisterButton">Register</v-btn>
          </v-flex>
        </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </v-slide-y-transition>
</template>

<script>
export default {
  data: function () {
    return {
      name: null
    }
  },
  methods: {
    onRegisterButton () {
      if(this.name) {
        let registrationData = {name: this.name}
        this.$emit('registerName', this.name);
        this.$mqtt.publish('test/nubg/join', JSON.stringify(registrationData))
      }
    }
  }
}
</script>


import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueMqtt from 'vue-mqtt';

Vue.use(Vuetify, {
  iconfont: 'md',
})

Vue.use(VueMqtt, 'ws://mqtt.labict.be:1884');

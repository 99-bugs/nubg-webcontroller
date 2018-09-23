<template>
  <v-slide-y-reverse-transition>
    <v-container>
      <v-layout row>
        <h1>{{tankName}}</h1>
      </v-layout>
      <v-layout row>
        <div id='controls'>
          <button id='button-forward' data-down='forward' data-up='stop' @click="btnForward">▲&#xFE0E;</button>
          <button id='button-left' data-down='left' data-up='stop' @click="btnLeft">◀&#xFE0E;</button>
          <button id='button-right' data-down='right' data-up='stop' @click="btnRight">▶&#xFE0E;</button>
          <button id='button-reverse' data-down='reverse' data-up='stop' @click="btnReverse">▼&#xFE0E;</button>
        </div>
      </v-layout>
    </v-container>
  </v-slide-y-reverse-transition>
</template>

<script>

let sha1 = require('sha1');
let jwt = require('jsonwebtoken');

const JWTSECRET = "484074319837639265922729358538";
const GAMETOPIC = 'test/nubg/devgame/update';
const DRIVESPEED = 10;
const TURNSPEED = 360 / 8;
const DEFAULTS = {drive: 0, turn: 0};

export default {
  props: ['tankName'],
  methods: {
    btnForward: function(){
     this.sendCommand({drive: DRIVESPEED});
    },
    btnReverse: function(){
     this.sendCommand({drive: -DRIVESPEED});
    },
    btnLeft: function(){
     this.sendCommand({turn: -TURNSPEED});
    },
    btnRight: function(){
     this.sendCommand({turn: TURNSPEED});
    },

    sendCommand: function(command) {
      let token = jwt.sign({
        "tank_id": this.tankId,
        "game_id": "devgame"
      }, JWTSECRET);


      command = Object.assign({}, DEFAULTS, command);
      command.token = token;

      this.$mqtt.publish(GAMETOPIC, JSON.stringify(command));
    }
  },
  computed: {
    tankId: function(){
      return sha1(this.tankName)
    }
  }
}
</script>


<style scoped>
  button{
    color: #888;
    background: none;
    border: .3vh solid #888;
    border-radius: 4vh;
    outline: none;
    cursor: pointer;
  }

  #controls {
	margin: 2vh 0;
	/* display: none; */
  display: grid;
	
	grid-template-columns: 16vw 16vw 16vw;
	grid-template-rows: 16vw 16vw 16vw;
	grid-gap: 0;
}

/* .connected #controls {
	display: inline-grid;
} */
			
#controls #button-forward {
	grid-column: 2;
	grid-row: 1;
}
#controls #button-left {
	grid-column: 1;
	grid-row: 2;
}
#controls #button-right {
	grid-column: 3;
	grid-row: 2;
}
#controls #button-reverse {
	grid-column: 2;
	grid-row: 3;
}

#controls button {
	padding: 1vh 2vh;
	font-size: 2vh;
}

/* #controls button:active,
.forward #controls button#button-forward,
.reverse #controls button#button-reverse,
.left #controls button#button-left,
.right #controls button#button-right {
	background: #888;
	color: #444;
} */
</style>


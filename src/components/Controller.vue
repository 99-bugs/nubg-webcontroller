<template>
  <v-slide-y-reverse-transition>
    <v-container>
      <v-layout row>
        <h1>{{tankName}}</h1>
      </v-layout>
      <v-layout row>
        <div id='controls'>
          <button id='button-forward' data-down='forward' data-up='stop'>▲&#xFE0E;</button>
          <button id='button-left' data-down='left' data-up='stop'>◀&#xFE0E;</button>
          <button id='button-right' data-down='right' data-up='stop'>▶&#xFE0E;</button>
          <button id='button-reverse' data-down='reverse' data-up='stop'>▼&#xFE0E;</button>
        </div>
      </v-layout>
    </v-container>
  </v-slide-y-reverse-transition>
</template>

<script>
export default {
  props: ['tankName']
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


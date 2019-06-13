<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="grey--text">PUBG</span>
        <span class="white--text">.</span>
        <span class="orange--text">seatlon</span>
        <span class="white--text">.</span>
        <span class="grey--text">eu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span class="mx-2">Home</span>
      </v-btn>
      <v-btn flat to="/player">
        <span class="mx-2">Player</span>
      </v-btn>
      <v-btn flat to="/match">
        <span class="mx-2">Match</span>
      </v-btn>
      <v-btn flat to="/tournament">
        <span class="mx-2">Tournament</span>
      </v-btn>
      <v-btn flat to="/about">
        <span class="mx-2">About</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat href="https://seatlon.eu" target="_blank">
        <span class="mr-2">What else do i do?</span>
      </v-btn>
    </v-toolbar>

    <v-content class="grey">
      <router-view/>
    </v-content>
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

    }
  }
}
</script>

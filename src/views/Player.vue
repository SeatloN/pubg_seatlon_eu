<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-btn flat to="/player/steam">
        <span class="mx-2">Steam</span>
      </v-btn>
      <v-btn flat to="/player/psn">
        <span class="mx-2">PSN</span>
      </v-btn>
      <v-btn flat to="/player/xbox">
        <span class="mx-2">Xbox</span>
      </v-btn>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>

<script>
import Spinloader from "../components/Spinloader";
export default {
  name: "Player",
  data: () => {
    return {

    }
  }
};
</script>

<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <div v-if="loading">
        <Spinloader/>
      </div>
      <v-layout row wrap v-if="!loading">
        <v-flex d-flex xs12 sm12 md12>
          <v-card color="black" dark>
            <v-card-title primary class="title">Player</v-card-title>
            <v-card-text>{{ data.playerName }}</v-card-text>
            <v-card-text>{{ data.playerId }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md12>
          <v-card color="black" dark>
            <v-card-title primary class="title">Player</v-card-title>
            <v-card-text>{{ data.playerName }}</v-card-text>
            <v-card-text>{{ data.playerId }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Spinloader from "../components/Spinloader";
export default {
  name: "PlayerName",
  components: {
    Spinloader
  },
  created() {
    console.log(this.$route);
    this.name = this.$route.params.name;
    this.platform = this.$route.params.platform;
  },
  data: () => {
    return {
      name: "",
      platform: "",
      data: null,
      loading: true
    };
  },
  watch: {},
  methods: {
    fetchData() {
      this.name = this.$route.params.name;
      this.platform = this.$route.params.platform;
      var url = `http://94.130.136.148:3000/player?use=name`;
      var data = { shard: this.platform, username: this.name };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => (this.data = json), (this.loading = false))
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

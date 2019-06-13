<template>
  <div class="about">
    <v-container align-center justify-center row v-if="status.status">
      <h1 center class="headline mb-3 text-xs-center">About Us</h1>
      <v-layout row wrap>
        <v-flex md6 s12>
          <v-card hover dark class="ma-4 pa-4">
            <v-img :src="require('../assets/pubg-10.jpg')" class="my-3" contain height="150"></v-img>
            <v-card-title primary-title class="ma-2 justify-center">
              <div>
                <h3 class="headline mb-0 text-xs-center">Backend Status</h3>
                <v-divider></v-divider>
                <div class="amber--text text-xs-center">{{status.status}}</div>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
            <v-btn
                @click='getData'
                flat
                color="orange"
                href=""
              >
                <span class="m-1"><v-icon>refresh</v-icon> Refresh Status</span>
              </v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex md6 s12>
          <v-card hover dark class="ma-4 pa-4">
            <v-img :src="require('../assets/pubg-11.jpg')" class="my-3" contain height="150"></v-img>
            <v-card-title primary-title class="ma-2 justify-center">
              <div>
                <h3 class="headline mb-0 text-xs-center">PUBG API Status</h3>
                <v-divider></v-divider>
                <div class="amber--text text-xs-center">{{status.data['data']['id']}}</div>
              </div>
            </v-card-title>
            <v-card-actions column wrap class="justify-center">
              <v-btn
                flat
                color="orange"
                href="https://developer.pubg.com/status?locale=en"
                target="_blank"
              >
                <span class="m-1"><v-icon>web</v-icon> Status</span>
              </v-btn>
              <v-btn
                flat
                color="orange"
                href="https://documentation.pubg.com/en/changelog/changelog.html"
                target="_blank"
              >
                <span class="m-1"><v-icon>web</v-icon> Changelog</span>
              </v-btn>
              <br>
              <v-btn flat color="orange" href="https://twitter.com/pubg_support" target="_blank">
                <span class="m-1"><v-icon>share</v-icon> Twitter</span>
              </v-btn>
              <v-btn flat color="orange" href="https://www.pubg.com/support/" target="_blank">
                <span class="m-1"><v-icon>web</v-icon> Support</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      status: ''
    }
  },
  methods: {
    getData() {
      fetch(`http://94.130.136.148:3000/status`, { method: "GET" })
        .then(res => res.json())
        .then(json => (this.status = json))
        .catch(error => console.error("Error:", error));
    }
  },
  created(){
    this.getData();
  },
  mounted() {

  },
};
</script>

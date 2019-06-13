<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-form v-model="valid">
        <v-text-field v-model="name" :rules="nameRules" label="PUBG Ingame name" required></v-text-field>
        <v-btn :to="{ name: 'playername', params: { name: name }}">Search</v-btn>
      </v-form>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Platform",
  data: () => {
    return {
      valid: false,
      name: '',
      platform: '',
      nameRules: [v => !!v || "Name is required"]
    };
  },
  watch: {

  },
  methods: {
    submit() {
      name = this.name;
      platform = this.$route.params.platform;
      console.log("Submit" + this.name);
    },
  }
};
</script>

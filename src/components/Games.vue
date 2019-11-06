<template>
  <v-container>
    <h2 class="display-1">Games</h2>
    <v-btn
      color="primary"
      to="/create-game"
    >Create Game</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "games",
  data() {
    return {
      games: []
    };
  },
  async beforeMount() {
    const res = await axios.get("/api/games");
    this.games = res.data.data;
  }
};
</script>
<template>
  <v-container>
    <h2 class="display-1">Games</h2>
    <v-container fluid>
      <v-row id="table-header">
        <v-col md="5">
          Game Name
        </v-col>
        <v-col md="4">
          Date Created
        </v-col>
        <v-col md="1">
          Questions
        </v-col>
        <v-col md="2">
          Actions
        </v-col>
      </v-row>
      <v-row
        v-for="game in games"
        :key="game._id"
      >
        <v-col md="5">
          {{game.title}}
        </v-col>
        <v-col md="4">
          {{game.dateCreated}}
        </v-col>
        <v-col md="1">
          {{game.questions.length}}
        </v-col>
        <v-col md="2">

        </v-col>
      </v-row>
    </v-container>
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

<style lang="scss">
#table-header {
  font-weight: bold;
}
</style>
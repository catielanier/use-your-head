<template>
  <v-container>
    <h2 class="display-1">Create Game</h2>
    <v-form>
      <v-text-field
        v-model="title"
        label="Game Title"
      />
      <h3
        class="display-2"
        v-if="questions.length > 0"
      >Questions:</h3>
      <v-container
        v-for="(question, index) in questions"
        :key="index"
      >
        <p>{{question.question}}</p>
      </v-container>
      <AddQuestion :pushQuestion="addQuestion" />
      <v-btn color="primary">Create Game</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import AddQuestion from "./AddQuestion";
import { getToken } from "../services/tokenService";
export default {
  name: "create-game",
  data() {
    return {
      title: "",
      questions: [],
      loading: false,
      error: null,
      success: false
    };
  },
  methods: {
    addQuestion: function(question) {
      this.questions.push(question);
    },
    addGame: async function() {
      this.loading = true;
      const { title, questions } = this.$data;
      const token = await getToken("uyhAdmin");
      try {
        await axios({
          method: "POST",
          url: "/api/games",
          data: {
            title,
            questions,
            token
          }
        });
        this.loading = false;
        this.success = true;
        this.$router.push("/");
      } catch (e) {
        this.error = e;
        this.loading = false;
      }
    }
  },
  components: {
    AddQuestion
  }
};
</script>
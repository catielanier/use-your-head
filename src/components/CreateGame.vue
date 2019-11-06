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
import AddQuestion from "./AddQuestion";
export default {
  name: "create-game",
  data() {
    return {
      title: "",
      questions: []
    };
  },
  methods: {
    addQuestion: function(question) {
      this.questions.push(question);
    }
  },
  components: {
    AddQuestion
  }
};
</script>
<template>
  <v-container>
    <h2 class="display-1">Create Game</h2>
    <v-form>
      <v-text-field
        v-model="title"
        label="Game Title"
      />
      <h3 class="display-2">Questions:</h3>
    </v-form>
  </v-container>
</template>

<script>
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
  }
};
</script>
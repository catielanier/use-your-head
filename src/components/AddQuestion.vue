<template>
  <v-container>
    <h3 class="display-2">Add a Question:</h3>
    <v-form @submit.prevent="addQuestion">
      <v-text-field
        v-model="question"
        placeholder="Question"
      />
      <v-text-field
        v-model="expectedAnswer"
        placeholder="Expected Answer"
      />
      <v-text-field
        v-model="video"
        placeholder="Video URL"
      />
      <v-text-field
        v-model="image"
        placeholder="Image URL"
      />
      <v-btn
        type="submit"
        color="secondary"
      >Add Question</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "add-question",
  data() {
    return {
      question: "",
      expectedAnswer: "",
      video: "",
      image: ""
    };
  },
  props: {
    pushQuestion: Function
  },
  methods: {
    addQuestion: async function() {
      const { question, expectedAnswer, video, image } = this.$data;
      const newQuestion = {
        question,
        expectedAnswer,
        video,
        image
      };
      await this.$props.pushQuestion(newQuestion);
      this.question = "";
      this.expectedAnswer = "";
      this.video = "";
      this.image = "";
    }
  }
};
</script>
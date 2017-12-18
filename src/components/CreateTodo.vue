<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button ico" @click="toggleForm" v-show="!showForm">
      <i class="plus icon"></i>
    </button>
    <div class='ui centered card' v-show="showForm">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text' ref='project' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' @click="submitForm">
              Create
            </button>
            <button class='ui basic red button' @click="toggleForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleText: '',
      projectText: '',
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    submitForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('create-todo', {
          title,
          project,
          done: false,
        });
      } else {
        this.showForm = false;
      }
    },
  },
};
</script>

<template>
  <div class='ui centered card'>
    <div class='content'>
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.project }}
      </div>
      <div class='extra content'>
        <span class='right floated trash icon' @click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </span>
        <span class='right floated edit icon' @click="toggleForm">
          <i class='edit icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="showForm">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title">
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project">
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!showForm &&todo.done" disabled>
      Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!showForm && !todo.done">
      Pendign
    </div>
  </div>
</template>
<script>
export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    },
  },
};
</script>

<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => todo.done === true).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => todo.done === false).length}}</p>
    <todo @complete-todo="completeTodo" @delete-todo="deleteTodo" v-for="(todo, index) in todos" :key="index" :todo="todo"></todo>
    <create-todo @create-todo="createTodo"></create-todo>
  </div>
</template>
<script>
import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
    CreateTodo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    createTodo(todo) {
      this.todos.push(todo);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>
<style>

</style>

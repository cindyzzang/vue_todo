<template>
  <div id="app" class="container">
    <h1 class="text-center">TO DO APP</h1>
    <input
        v-model="todoText"
        type="text"
        class="w-100 p-2"
        placeholder="Type To-do"
        @keyup.enter="addTodo"
    >
    <hr>
    <MyTodo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import MyTodo from '@/components/MyTodo.vue';
export default {
    components: {
        MyTodo
    },
    data() {
        return {
            todoText : '',
            todos: [
                { id : 1,
                  text: 'buy a car',
                  checked: false
                },
                { id : 2,
                  text: 'study',
                  checked: false
                }
            ]
        }
    },
    methods: {
        deleteTodo(id){
            // 방법 1 (splice 사용)
            // const index = this.todos.findIndex(todo => {
            //     return todo.id === id;
            // });
            // this.todos.splice(index,1);

            // 방법 2 (filter 사용)
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        addTodo(e){
            this.todos.push({
                id : Math.random(),
                text : e.target.value,
                checked : false
                });
            this.todoText='';

        },
        toggleCheckbox({id,checked}){
            const index = this.todos.findIndex(todo => {
                return todo.id === id;
            });
            this.todos[index].checked = checked;
        },
    }
}
</script>



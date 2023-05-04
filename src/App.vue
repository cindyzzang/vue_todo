<template>
  <div id="app" class="container">
    <h1 class="text-center">TO DO APP</h1>
    <CompletedTodo :todos="todos"/>
    <AddTodo
        @addTodo="addTodo"/>
    <hr>
    <TodoList
        :todos="todos"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from "@/components/AddTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";
export default {
    components: {
        TodoList,
        AddTodo,
        CompletedTodo
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
        addTodo(value){
            this.todos.push({
                id : Math.random(),
                text : value,
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



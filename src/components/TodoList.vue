<template>
    <div>
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
import MyTodo from "@/components/MyTodo.vue";
export default {
    components: {
        MyTodo
    },
    computed: {
        todos() {
            return this.$store.state.todo.todos;
        }
    },
    methods: {
        toggleCheckbox(value){
            this.$emit('toggle-checkbox', value)
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    }
}
</script>

<style scoped>

</style>
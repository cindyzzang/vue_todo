<template>
    <div>
        <input
            v-model="todoText"
            type="text"
            class="w-100 p-2"
            placeholder="Type To-do"
            @keyup.enter="addTodo"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods:{
        addTodo(e) {
            this.$emit('addTodo', e.target.value);
        }
    }
}
</script>

<style scoped>

</style>
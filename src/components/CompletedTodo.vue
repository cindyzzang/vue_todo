<template>
    <div>
        Completed Todo : {{numberOfCompletedTodo}}

    </div>
</template>

<script>
export default {
    computed: { //state를 가져올 때는 computed 안에 작성
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo() {
            return this.$store.getters.numberOfCompletedTodo;
        }
    }
}
</script>

<style scoped>

</style>
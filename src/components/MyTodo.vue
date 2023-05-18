<template>
    <div class="mb-2 d-flex justify-content-between">
        <label >
        <input
            type="checkbox"
            :checked="todo.checked"
            @change="toggleCheckbox"
        >
        <span
            class="ms-3"
            :class="todo.checked ? 'text-decoration-line-through' : ''"
        >{{ todo.text }}</span>
        </label>
        <button
            class="btn btn-info btn-sm "
            @click="clickDelete"
        >delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required:true,

        }
    },
    methods:{
        toggleCheckbox(e){
            // this.$store.commit('TOGGLE_TODO',{
            //     id:this.todo.id,
            //     checked:e.target.checked
            this.$store.dispatch('todo/toggleTodo',{
                id:this.todo.id,
                checked:e.target.checked
            })
            // this.$emit('toggle_checkbox',{
            //     id:this.todo.id,
            //     checked:e.target.checked
            // })
        },
        clickDelete(){
            // this.$store.commit('DELETE_TODO',this.todo.id)
            this.$store.dispatch('todo/deleteTodo',this.todo.id)
            // this.$emit('click-delete', this.todo.id)
        }
    }
}
</script>

<style scoped>

</style>

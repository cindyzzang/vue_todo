<template>
    <div>
        UserList
        <hr>
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"; //computed 안에
export default {
    created() {
        this.getUsers();
    },
    computed : {

        //mapgetter (users의 이름을 다르게 가져오고 싶을 때 ({people : 'users'}) 오브젝트로 가져오기
        ...mapState({
            users : state => state.user.users
        })

        //-> 다른방법/ 이름 안 바꾸고 싶으면 바로 배열에 넣으면 됨
        // ...mapState('user',['users'])

        // users() {
        //     return this.$store.state.users;
        // },
        // todos() {
        //     return this.$store.state.todos;
        // }
    },
    methods : {
        ...mapActions('user',['getUsers'])
        // getUsers() {
        //     this.$store.dispatch('getUsers')
        // }
    }
}
</script>

<style scoped>

</style>
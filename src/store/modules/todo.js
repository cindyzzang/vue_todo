export default {
    namespaced : true,
    state: {
        //데이터가 들어가는 곳
        todos: [
            { id : 1,
                text: 'buy a car',
                checked: false
            },
            { id : 2,
                text: 'study',
                checked: false
            }
        ],
    },
    mutations: {
        //state에 있는 데이터 바꿔줌(함수 정의 - 함수로 state 접근 - state 값 변경)
        ADD_TODO(state, value) {
            state.todos.push({
                id : Math.random(),
                text : value,
                checked : false
            });
        },
        TOGGLE_TODO(state,{id,checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId);
        }
    },
    actions: {
        //함수(메소드) 비동기적 일 처리 - 비동기 작업하고 state 값 변경?
        addTodo({commit}, value) {
            //비동기 작업
            setTimeout(function(){
                commit('ADD_TODO',value)},2000)
        },
        toggleTodo({commit},{id,checked}){
            setTimeout(function(){
                commit('TOGGLE_TODO',{id,checked})
            },2000)
        },
        deleteTodo({commit},todoId){
            setTimeout(function (){
                commit('DELETE_TODO',todoId)
            },2000)
        }
    },
    getters: {
        //computed랑 비슷
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}
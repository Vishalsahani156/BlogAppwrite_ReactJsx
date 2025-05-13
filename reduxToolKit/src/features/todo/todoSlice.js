import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
      todos:[
        {
            
            id:'1',
            text:'Hello world',
        }
      ]
}
 export const todoSlic= createSlice({
     name:'todo',
    //  name:'Hello todos',
     initialState,
     reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todos)=>todos.id!==action.payload)
        },

     }
 })

 export const{addTodo,removeTodo}= todoSlic.actions

 export  default todoSlic.reducer
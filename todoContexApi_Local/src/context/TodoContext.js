import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: '1',
        todo: 'sms todo',
        complete: false,
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleToto: (id) => { },
})
export const useToto = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;



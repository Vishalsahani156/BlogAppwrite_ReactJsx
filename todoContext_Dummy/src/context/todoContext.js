import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: '1',
            todo: 'sms todo',
            complete: false,
        },
    ],
    addTodo: (id) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
})

export const useTodo = () => {
    return TodoContext.useContext();
}

export const TodoContextProvider = TodoContext.Provider;

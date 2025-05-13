import React from 'react'
import { useState } from 'react'
import {useToto} from "../context/TodoContext.js"

export default function TodoForm() {
    const [todos, setTodo] = useState();

    const { addTodo } = useToto();

    // This is  function is   to provide 

    const add = (e) => {
        e.preventDefault()
        if (!todos) return

        addTodo({ todos, complete: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todos}
                onClick={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

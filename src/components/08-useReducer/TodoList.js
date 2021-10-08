import React from 'react'
import { TodoLisItem } from './TodoLisItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <div className="col-7">
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, index) => (
                        <TodoLisItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

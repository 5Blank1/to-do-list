import React, {useState} from 'react';

const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Задачи на сегодня"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Добавить задачу</button>
        </form>
    );
};

export default ToDoForm;
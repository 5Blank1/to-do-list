import React, {useState} from 'react';

const ToDoForm = ({editTodo , task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id)
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Обновление задачи"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Обновление задачи</button>
        </form>
    );
};

export default ToDoForm;
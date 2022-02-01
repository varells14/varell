import "./Todo.css";
import TodoList from "../todo-list/TodoList";

const Todo = () => {
    const todos = [
        {id: 1, title: 'Varell'},
        {id: 2, title: 'Vincent'},
        {id: 3, title: 'Vianda'},
    ]

    return(
        <div>
            <h3>List Name</h3>
            <TodoList dataTodos={todos}/>
        </div>
    )
}

export default Todo
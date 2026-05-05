type Todo = {
    id: string
    name: string
    status: string
    completed: boolean
}

type NewTodo = Omit<Todo, "id">

function saveTodo(todo: NewTodo) {
    return {
        ...todo,
        id: crypto.randomUUID()
    }
}

function renderTodo(todo: Todo) {
    const div = document.createElement("div");
    div.id = todo.id;

}
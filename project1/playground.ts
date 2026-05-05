type Todo = {
    title?: string
    completed: boolean
    address?: {
        stree?: string
    }
}

type FormTodo = Required<Pick<Todo, "title">> & Omit<Todo, "title">

const todo: FormTodo = {
    title: "title",
    completed: false,
    address: {
        stree: "India"
    }
}
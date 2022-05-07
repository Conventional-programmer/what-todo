import TodoState from "./TodoState"

export default class Todo {
    name: string | undefined
    description: string | undefined
    state: TodoState | undefined
    subtodos: Todo[] | undefined
}

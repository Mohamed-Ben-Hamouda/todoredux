import { ADD_TODO, DEL_TODO, EDIT_TODO, LINE_TODO } from './types'



export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }

}
export const delTodo = newTodo => {
    return {
        type: DEL_TODO,
        payload: newTodo
    }

}
export const lineTodo = newTodo => {
    return {
        type: LINE_TODO,
        payload: newTodo
    }

}
export const editTodo = newTodo => {
    return {
        type: EDIT_TODO,
        payload: newTodo
    }

}

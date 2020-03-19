import { ADD_TODO, DEL_TODO, EDIT_TODO, LINE_TODO } from "../actions/types"
import { v4 as uuidv4 } from 'uuid'



const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)
        case EDIT_TODO:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        case DEL_TODO:
            return state.filter(el => el.id !== action.payload)
        case LINE_TODO:
            return state.map(el => el.id === action.payload ? { ...el, para: !el.para } : el)
        default:
            return state
    }
}
export default TodoReducer
//.map(el =>el.id === id ? { ...el, para: !el.para } : el)
//return state.map(el => action.payload === el.id ? { ...el, para: !el.para } : el)
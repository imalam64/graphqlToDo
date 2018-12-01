import uuid from 'uuid';
import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../actions/types';

const initialState = {
    toDo: [
        { id: uuid(), task: 'Practice Code'},
        { id: uuid(), task: 'Make Money'},
        { id: uuid(), task: 'Apply to Jobs'},
        { id: uuid(), task: 'Find Cash'},
      ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODOS:
            return {
                ...state
            };
        case DELETE_TODO:
            return {
                ...state,
                toDo: state.toDo.filter( toDo => toDo.id !== action.payload)
            };
        case ADD_TODO:
        return {
            ...state,
            toDo: [action.payload, ...state.toDo]
        };
        default:
            return state;
    }
}
import {ADD_TASK, POPULATE_DATA} from '../actionTypes';

const data  =  {
    info: [], 
    isLoading: true
}

export default function(state = data, action) {
    switch(action.type) {
        case ADD_TASK: {
            return {
                ...state,
                info:[...state.info, action.payload.task]
            }
        }

        case POPULATE_DATA: {
            return {
                ...state,
                info:action.payload.data,
                isLoading: false
            }
        }

        default: return state;
    }
}
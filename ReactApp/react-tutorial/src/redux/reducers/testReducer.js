import {
    ADD_TASK,
    CHANGE_STATUS,
    POPULATE_DATA,
    REMOVE_TASK
} from '../actionTypes';

const data = {
    info: [],
    isLoading: true,
    error: {}
}

export default function (state = data, action) {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                info: [...state.info, action.payload.task]
            }
        }

        case REMOVE_TASK: {
            return {
                ...state,
                info: action.payload.task
            }
        }

        case POPULATE_DATA: {
            return {
                ...state,
                info: action.payload.data,
                isLoading: false
            }
        }

        case CHANGE_STATUS: {
            return {
                ...state,
                info: action.payload.data
            }
        }

        default:
            return state;
    }
}
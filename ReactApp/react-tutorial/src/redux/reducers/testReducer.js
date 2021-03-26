import {
    ADD_TASK,
    CALL_API,
    CALL_API_FAILED,
    CALL_API_SUCCESS,
    CHANGE_STATUS,
    POPULATE_DATA
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

        case CALL_API: {
            return {
                ...state,
                isLoading: true
            }
        }

        case CALL_API_SUCCESS: {
            console.log(action, "success")
            return {
                ...state,
                isLoading: false,
            }
        }

        case CALL_API_FAILED: {
            console.log(action, "Error")
            return {
                ...state,
                isLoading: false
            }
        }

        default:
            return state;
    }
}
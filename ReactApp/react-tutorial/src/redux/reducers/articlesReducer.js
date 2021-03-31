export const GET_ARTICLES = "GET_ARTICLES";
export const SET_ARTICLES = "SET_ARTICLES";
export const REMOVE_ARTICLES = "REMOVE_ARTICLES";
export const ADD_ARTICLES = "ADD_ARTICLES";
export const ADD_REDUX_ARTICLES = "ADD_REDUX_ARTICLES";

const data = {
    articlesInfo: []
}

export default function (state = data, action) {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                articlesInfo: action.payload.articles
            }

            case REMOVE_ARTICLES:
                return {
                    articlesInfo: action.payload.articles
                }

            case ADD_REDUX_ARTICLES:
                return {
                    ...state,
                    articlesInfo: [...state.articlesInfo, action.payload.articles]
                }

                default:
                    return state;
    }
}
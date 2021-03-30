export const GET_ARTICLES = "GET_ARTICLES";
export const SET_ARTICLES = "SET_ARTICLES";
export const REMOVE_ARTICLES = "REMOVE_ARTICLES";

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

                default:
                    return state;
    }
}
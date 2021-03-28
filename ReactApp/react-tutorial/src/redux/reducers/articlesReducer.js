export const GET_ARTICLES = "GET_ARTICLES";
export const SET_ARTICLES = "SET_ARTICLES";

const data = {
    articlesInfo: []
}

export default function (state = data, action) {
    switch (action.type) {
        case SET_ARTICLES: {
            console.log("Reducer data : "+JSON.stringify(action.payload.articles))
            return {
                articlesInfo: action.payload.articles
            }
        }

        default:{
            console.log("Default")

            return state;
        }
    }
}
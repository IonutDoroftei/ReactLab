import {
    put,
    call,
    takeEvery
} from "redux-saga/effects";
import {
    setArticles,
    addReduxArticle
} from "../actions/actions";
import {
    ADD_ARTICLES,
    GET_ARTICLES
} from "../reducers/articlesReducer";
import {
    getAllArticles,
    addNewArticles
} from "./api/api";

// Handlers
function* getArticlesData(action) {
    try {
        const articles = yield call(getAllArticles);
        yield put(setArticles(articles));
    } catch (error) {
        console.log(error);
    }
}

function* addArticlesData(action) {
    try {
        const response = yield call(addNewArticles, action.payload.articles);
        yield put(addReduxArticle(action.payload.articles));
    } catch (error) {
        console.log(error);
    }
}

// Watcher (watch dispatched actions -> triggers handler)
export default function* mySaga() {
    yield takeEvery(GET_ARTICLES, getArticlesData);
    yield takeEvery(ADD_ARTICLES, addArticlesData);
}
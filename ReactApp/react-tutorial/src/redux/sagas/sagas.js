import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { setArticles } from "../actions/actions";
import {GET_ARTICLES } from "../reducers/articlesReducer";
import { getAllArticles } from "./api/api";

// Handlers
function* getArticlesData(action) {
    try {
        const articles = yield call(getAllArticles);
        console.log("Populate Redux:" + JSON.stringify(articles))
        yield put(setArticles(articles));
        console.log("after yield");
    } catch (error) {
        console.log(error);
    }
}
// Watcher (watch dispatched actions -> triggers handler)
export default function* mySaga() {
    yield takeEvery(GET_ARTICLES, getArticlesData);
}
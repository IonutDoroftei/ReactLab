import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { populateData, setArticles } from "../actions/actions";
import {GET_ARTICLES } from "../reducers/articlesReducer";
import { getAllArticles } from "./api/api";

// Handlers
function* getArticlesData(action) {
    try {
        const articles = yield call(getAllArticles);
        yield put(setArticles(articles));
    } catch (error) {
        console.log(error);
    }
}
// Watcher (watch dispatched actions -> triggers handler)
export default function* mySaga() {
    yield takeEvery(GET_ARTICLES, getArticlesData);
}
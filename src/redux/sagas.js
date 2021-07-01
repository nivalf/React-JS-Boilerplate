import { all } from "redux-saga/effects";

import DemoSaga from "./demo/saga"
import signIn from "./signIn/saga"



export default function* rootSaga(getState) {
    yield all([
        DemoSaga(),
        signIn(),
    ]);
}

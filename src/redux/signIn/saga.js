import { all, takeLatest, put } from "redux-saga/effects";

import actions from "./actions";
import { addUser_db } from "../../utility";

// Save a new user to database
function* saveNewUser_saga(params) {
    try {
        let { userData } = params.payload;

        yield addUser_db(userData);

        yield put({
            type: actions.SAVE_NEW_USER,
            payload: {
                success: true,
                status: "success",
                message: "New user created",
            },
        });
    } catch (error) {
        console.log(error);

        yield put({
            type: actions.SAVE_NEW_USER,
            payload: {
                success: false,
                status: "error",
                message: "Failed to create new user",
            },
        });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(actions.SAVE_NEW_USER_SAGA, saveNewUser_saga),
    ]);
}

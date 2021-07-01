import demoActions from "./actions";

const initState = {
    counter: 0,
};

export default function demoReducer(state = initState, action) {
    switch (action.type) {
        case demoActions.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
}

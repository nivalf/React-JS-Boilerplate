const DOCUMENT = "DEMO_";

const actions = {
    INCREMENT_COUNTER_SAGA: DOCUMENT + "INCREMENT_COUNTER_SAGA",
    INCREMENT_COUNTER: DOCUMENT + "INCREMENT_COUNTER",

    incrementCounter: (payload) => ({
        type: actions.INCREMENT_COUNTER_SAGA,
        payload,
    }),
};

export default actions;

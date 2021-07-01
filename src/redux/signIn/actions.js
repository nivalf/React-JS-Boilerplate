const DOCUMENT = "SIGN_IN_";

const actions = {
    SIGN_IN: DOCUMENT + "SIGN_IN",
    SAVE_NEW_USER_SAGA: DOCUMENT + "SAVE_NEW_USER_SAGA",
    SAVE_NEW_USER: DOCUMENT + "SAVE_NEW_USER",

    saveNewUser: (payload) => ({
        type: actions.SAVE_NEW_USER_SAGA,
        payload
    }),

    signIn: (payload) => ({
        type: actions.SIGN_IN,
        payload,
    }),

    signOut: () => ({
        type: actions.SIGN_IN,
        payload: undefined,
    })
};

export default actions;

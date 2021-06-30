import {  store } from "../../../redux/store";
import signInActions from "../../../redux/signIn/actions";

const { signOut } = signInActions;

const clearUserFromStore = () => store.dispatch(signOut());


export const onSignOut = () => {
    clearUserFromStore();
    console.log("Sign out success");
};

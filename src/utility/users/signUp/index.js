import { store } from "../../../redux/store";
import signInActions from "../../../redux/signIn/actions";

const { saveNewUser } = signInActions;

const shapeUserData = (user) => ({ id: user.uid });

const signUp = (user) => {
    let userData = shapeUserData(user);
    store.dispatch(saveNewUser({ userData }));
};

export const handleNewUser = ({ additionalUserInfo, user }) => {
    // Helpers //
    const isNewUser = () =>
        user.metadata.creationTime === user.metadata.lastSignInTime;
    // *** //

    if (isNewUser()) {
        signUp(user);
    }
};

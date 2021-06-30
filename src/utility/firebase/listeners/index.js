/* **** LISTENERS **** */

import { firebaseAuth } from "../initialize";
import { onSignIn, onSignOut } from "../../users";

/* onAuthStateChanged listener is triggered on :
        - Right after the listener has been registered
        - When a user signs in
        - When the current user signs out
        - When the current user changes
        - When there is a change in the current user's token
    */
firebaseAuth.onAuthStateChanged((user) => {
    // Helpers //
    const isSignedIn = () => !!user;
    // *** //

    if (isSignedIn()) {
        onSignIn(user);
    } else {
        onSignOut();
    }
});

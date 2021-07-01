/* *** USER FUNCTIONS *** */

import { firebaseAuth } from "..";

export const signOut_firebase = () => firebaseAuth.signOut();

export const getCurrentUser = () => firebaseAuth.currentUser;

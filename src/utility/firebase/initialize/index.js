// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import { firebaseConfig } from "../../../settings";

const { auth, firestore, initializeApp } = firebase;

/* Initialize default App. 
    - Now importing "firebase" in other files will be this initialized default App.
    - Can initialize multiple Apps also. For that, initialize and store it to a constant.
        This constant can be used to access the specific app.*/
initializeApp(firebaseConfig);

/* Functions immediately dependent on initialization */
export const firebaseAuth = auth();
export const database = firestore();

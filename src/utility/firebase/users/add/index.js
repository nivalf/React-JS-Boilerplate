import { userRef } from "../../references";

const MERGE = { merge: true };

export const addUser_db = async (data) => {
    await userRef.doc(data.id).set(data, MERGE);
};

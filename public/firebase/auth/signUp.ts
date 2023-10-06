import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

interface Props {
    email: string;
    password: string;
}

export default async function signUp(props: Props) {
    let result: UserCredential = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, props.email, props.password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, UserCredential, User } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email:string, password:string): Promise<User | null>  {
    let result: UserCredential | null = null;
    try {
      result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      return null;
    }

    const user = result?.user;

    return user;
}
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import firebaseAuth from "firebase/auth";
import signIn from "./signin";

const auth = getAuth(firebase_app);

export default async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<firebaseAuth.User | null> {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      await updateProfile(user, {
        displayName: name,
        photoURL: "/default-user.jpeg"
      });
    }
    signIn(email, password);
    return user;
  } catch (error) {
    return null;
  }
}



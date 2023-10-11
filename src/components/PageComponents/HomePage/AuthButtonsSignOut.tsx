import { getAuth, signOut } from "firebase/auth";
import firebase_app from "@/src/firebase/config";

export default function AuthButtonsSignOut() {
  return (
    <button onClick={
      () => {
        signOut(getAuth(firebase_app));
      }
    } className="bg-violet4 hover:bg-violet6 px-4 py-2 rounded-full">
      Uitloggen
    </button>
  )
}
import { User } from "firebase/auth";
import AuthButtonsSignUp from "./AuthButtonsSignUp";
import AuthButtonsSignOut from "./AuthButtonsSignOut";
import AuthButtonsSignIn from "./AuthButtonsSignIn";
import { useAuthContext } from "@/src/context/AuthContext";

export default function AuthButtons() {
  const user: User | null = useAuthContext();

  return (
    <div className="mt-16 w-full flex justify-center">
      {user == null ? (
        <>
          <AuthButtonsSignUp /> 
          <AuthButtonsSignIn />
        </>
      ) : (
        <AuthButtonsSignOut />
      )}
    </div>
  );
}

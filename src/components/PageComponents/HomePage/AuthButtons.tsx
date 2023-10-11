import { User } from "firebase/auth";
import AuthButtonsSignUp from "./AuthButtonsSignUp";
import AuthButtonsSignOut from "./AuthButtonsSignOut";
import AuthButtonsSignIn from "./AuthButtonsSignIn";
import { useAuthContext } from "@/src/context/AuthContext";

interface Props {}

export default function AuthButtons() {
  const user: User | null = useAuthContext();

  return (
    <div className="mt-4 w-full flex justify-center">
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

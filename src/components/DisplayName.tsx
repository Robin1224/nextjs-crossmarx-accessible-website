import { User } from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";

export default function DisplayName() {
    // Getting user from context
    const user: User | null = useAuthContext();

  return (
    <span>{user != null ? user.displayName : "Profiel"}</span>
  )
}
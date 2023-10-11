import firebaseAuth from "firebase/auth";

interface Props {
  user: firebaseAuth.User | null;
}

export default function DisplayName({ user }: Props) {
  let textContent: string | null = "Profiel";

  if (user != null) { textContent = user.displayName; }

  return (
    <span>{textContent}</span>
  )
}
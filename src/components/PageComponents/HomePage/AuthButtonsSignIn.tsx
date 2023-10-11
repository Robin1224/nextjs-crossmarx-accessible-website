import SignInDialog from "../../Dialogs/SignInDialog";

export default function AuthButtonsSignIn() {
  return (
    <SignInDialog>
      <button className="bg-violet4 hover:bg-violet6 px-4 py-2 rounded-full mx-4">
          Inloggen
      </button>
    </SignInDialog>
  )
}
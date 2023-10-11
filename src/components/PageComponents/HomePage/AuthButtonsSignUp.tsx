import SignUpDialog from "../../Dialogs/SignUpDialog";

export default function AuthButtonsSignUp() {
  return (
    <SignUpDialog>
      <button className="bg-violet4 hover:bg-violet6 px-4 py-2 rounded-full mx-4">
          Registreren
      </button>
    </SignUpDialog>
  )
}
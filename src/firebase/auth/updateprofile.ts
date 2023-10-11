import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth(firebase_app);
const user = auth.currentUser;

if (user) {
  updateProfile(user, {
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

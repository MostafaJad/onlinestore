import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils.js";
const SignIn = () => {
  const logWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logWithGoogle}>log in </button>
    </div>
  );
};

export default SignIn;

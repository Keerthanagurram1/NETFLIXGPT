import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [isSignInForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const handleButton = async () => {
        // Check if the refs are assigned before accessing their values
        const emailValue = emailRef.current ? emailRef.current.value : "";
        const passwordValue = passwordRef.current ? passwordRef.current.value : "";
        const nameValue = nameRef.current ? nameRef.current.value : "";

        // Validate inputs
        const message = CheckValidate(emailValue, passwordValue);
        setErrorMessage(message);
        if (message) return; // Stop if validation fails

        try {
            if (isSignInForm) {
                // Sign In Logic
                const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
                console.log('Signed in:', userCredential.user);

                // Update profile if name is provided
                if (nameValue) {
                    await updateProfile(userCredential.user, {
                        displayName: nameValue,
                        photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
                    });
                }

                // Dispatch user details to Redux store
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                
                setErrorMessage(null);
            } else {
                // Sign Up Logic
                const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
                console.log('Signed up:', userCredential.user);
                
                // Update profile if name is provided
                if (nameValue) {
                    await updateProfile(userCredential.user, {
                        displayName: nameValue,
                        photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
                    });
                }

                setErrorMessage(null);
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${isSignInForm ? 'Sign in' : 'Sign up'} error:`, errorCode, errorMessage);
            setErrorMessage(errorMessage);
        }
    };

    // Toggle Form Type and Clear Errors
    const toggleForm = () => {
        setIsSignForm(!isSignInForm);
        setErrorMessage(null); // Clear error message when toggling forms
    };

    return (
        <div>
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-75 absolute inset-x-0 top-1/2 transform -translate-y-1/2 max-w-md mx-auto p-8 rounded-lg">
                <h1 className="text-white font-bold text-3xl mb-6">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Full Name"
                        className="text-white w-full p-3 mb-4 bg-gray-700 rounded-lg"
                    />
                )}
                <input
                    ref={emailRef}
                    type="email" // Use type="email" for better validation
                    placeholder="Email Address"
                    className="text-white w-full p-3 mb-4 bg-gray-700 rounded-lg"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className="text-white w-full p-3 mb-4 bg-gray-700 rounded-lg"
                />
                <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
                <button className="bg-red-700 text-white mx-2 p-3 my-6 w-full rounded-lg" onClick={handleButton}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-white mx-2 cursor-pointer" onClick={toggleForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
};

export default Login;

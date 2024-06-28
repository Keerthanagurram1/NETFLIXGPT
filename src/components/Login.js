import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constants";

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


                // Update profile if name is provided
                if (nameValue) {
                    await updateProfile(userCredential.user, {
                        displayName: nameValue,
                        photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                    });
                }

                // Dispatch user details to Redux store
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                
                setErrorMessage(null);
            } else {
                // Sign Up Logic
                const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
              
                
                // Update profile if name is provided
                if (nameValue) {
                    await updateProfile(userCredential.user, {
                        displayName: nameValue,
                        photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
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
                    src={BG_URL}
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

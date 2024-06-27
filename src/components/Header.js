

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe
    }, [dispatch, navigate]); // Dependency array with dependencies

    const signOutHandle = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    };

    return (
        <div className="absolute px-8 py-3 z-10 w-screen bg-gradient-to-b from-black flex justify-between">
            <img className="w-36" src={LOGO}
                alt="netflix Logo" />

            {user ? (
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 rounded-full"
                        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                        alt="User Profile"
                    />
                    <button onClick={signOutHandle} className="text-red-500 font-bold ml-4">Sign Out</button>
                </div>
            ) : (

                
                <div></div>
            )}
        </div>
    );
};

export default Header;


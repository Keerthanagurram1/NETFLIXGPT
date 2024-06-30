

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
    


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

    const handleGptSearch =()=>{
        dispatch(toggleGptSearchView());

    }
    const handlelanguage=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }

    const signOutHandle = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    };

    return (
        <div className="absolute px-8 py-3 z-10 w-screen bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
            <img className=" mx-auto md:mx-0 w-24 md:w-36" src={LOGO}
                alt="netflix Logo" />

            {user ? (
                <div className="flex justify-between items-center">
                    {showGptSearch && <select className="py-1 md:py-2 px-1 md:px-6 my-0 md:my-2 bg-purple-800 text-white rounded-lg" onChange={handlelanguage}>
                        {SUPPORTED_LANG.map(language =>  <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
                        
                    </select>}
                    <button onClick={handleGptSearch}
                    className=" py-1 md:py-2 px-3 md:px-6 my-0 md:my-2 mx-2 bg-purple-800 text-white rounded-lg"> {showGptSearch ? "HomePage":"GPT Search"}</button>
                    <img
                        className="w-8 md:w-12 h-8 md:h-12 rounded-full hidden md:block"
                        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                        alt="User Profile"
                    />
                    <button onClick={signOutHandle} className="text-white font-bold ml-1 md:ml-4 text-sm md:text-lg"> Sign Out
                        
                    </button>
                </div>
            ) : (

                
                <div></div>
            )}
        </div>
    );
};

export default Header;


import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const providerGoogle = new GoogleAuthProvider();

    //create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //take user name, photo URL etc. during registration
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    //login user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login user with google
    const loginUserWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    };

    const authInfo = { user, loading, createUser, updateUserProfile, loginUser, loginUserWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
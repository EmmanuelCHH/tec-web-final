
import React, { useContext, useState, useEffect, useRef } from "react";
import {auth, db} from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { async } from "@firebase/util";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userInfo = useRef();
  
    function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    function logout() {
      return signOut(auth);
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
  
      return unsubscribe;
    }, []);
  
    const value = {
      currentUser,
      login,
      logout,
      userInfo,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
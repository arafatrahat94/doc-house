import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   authentication functions =>
  const createNew = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginwithpass = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const LogOut = () => {
    return signOut(auth);
  };
  // onauthstateChange
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      if (currentUser && currentUser?.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        axios
          .post("https://doc-house-server-lac.vercel.app/jwt", {
            loggedUser,
          })
          .then(function (response) {
            localStorage.setItem("DOC-ACCESS", response.data.token);
          });
        setTimeout(() => {
          fetch(
            `https://doc-house-server-lac.vercel.app/users?userMail=${currentUser.email}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem("DOC-ACCESS")}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => setUser(data));
        }, 2000);
      } else localStorage.removeItem("DOC-ACCESS");
    });

    return () => unsub();
  }, []);
  // sending data object
  const authData = {
    user,
    loading,
    createNew,
    googleLogin,
    LogOut,
    loginwithpass,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

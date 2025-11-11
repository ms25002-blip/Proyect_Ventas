import React, { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (initializing) setInitializing(false);
    });
    return unsub;
  }, []);

  const login = (email, password) => {
    if (!email || !password) throw { code: 'auth/invalid-arguments', message: 'Completa ambos campos' };
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = async ({ email, password, name }) => {
    if (!email || !password || !name) throw { code: 'auth/invalid-arguments', message: 'Completa todos los campos' };
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, { displayName: name });
    await setDoc(doc(db, 'users', res.user.uid), {
      uid: res.user.uid,
      email,
      name,
      createdAt: new Date()
    });
    return res;
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, initializing, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


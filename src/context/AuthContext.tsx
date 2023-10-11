"use client"

import React from 'react';
import firebaseAuth from 'firebase/auth';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/src/firebase/config';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<firebase.User | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [user, setUser] = React.useState<firebaseAuth.User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={ user }>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
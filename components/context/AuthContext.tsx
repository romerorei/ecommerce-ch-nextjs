"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth, db, provider } from "@/firebase/config"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


interface User {
  logged: boolean;
  email: string | null;
  uid: string | null;
  name?: string | null;
  phone?: string | null
  role: string | null
}

interface AuthContextType {
  user: User;
  registerUser: (values: { email: string; password: string }) => Promise<void>;
  registerClientUser: (values: { email: string; password: string, name?: string, phone?: string }) => Promise<void>;
  loginUser: (values: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  //console.log(context)
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User>({
        logged: false, // pasar a false para
        email: "",
        uid: null,
        role: null,
        name: null
    })

    const router = useRouter()

    const registerUser = async (values: {email: string, password: string}) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
    }

    const registerClientUser = async (values: {email: string, password: string, name?: string, phone?: string}) => {

        try {

        // const docRef = await doc(collection(db, "products"))
            const userDocRef = doc(db, 'users', values.email);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                console.log('usuario existente')
                return;
            }

            await createUserWithEmailAndPassword(auth, values.email, values.password);

            await setDoc(userDocRef, {
                email: values.email,
                name: values.name,
                phone: values.phone,
                role: 'user',
            });

            router.push('/products/all');

        } catch (error) {
            console.log("Error en registro",error)
        }


    }

    const loginUser = async (values: {email: string, password: string}) => {
        await signInWithEmailAndPassword(auth, values.email, values.password);
    }

    const logout = async () => {
        await signOut(auth)
        //router.push("/products/all")
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                console.log(user)
                const docRef = doc(db, "users", user.email!)
                const userDoc = await getDoc(docRef)
                console.log(userDoc.data())


                if (userDoc.data()?.role === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                        role: userDoc.data()?.role
                    })
                } else if( userDoc.data()?.role === "user" ) {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                        name: userDoc.data()?.name || "",
                        role: userDoc.data()?.role
                    })
                    router.back()
                    //router.push("/products/all")
                } else {
                    router.push("/unauthorized")
                    logout()
                }

            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null,
                    name: null,
                    role: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider
          value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin,
            registerClientUser
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}

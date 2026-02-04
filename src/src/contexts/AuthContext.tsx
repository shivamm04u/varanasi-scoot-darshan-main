import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyCtyR68dG9TEI_C89PvsdrGmpkE6vCtV0s",
  authDomain: "varanasi-scoot-darshan.firebaseapp.com",
  projectId: "varanasi-scoot-darshan",
  storageBucket: "varanasi-scoot-darshan.firebasestorage.app",
  messagingSenderId: "437910870938",
  appId: "1:437910870938:web:cb7b3043bcc39216143823"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- STAFF EMAILS (For Auto-Redirect) ---
const STAFF = {
  super_admin: ['shivampandit2006@gmail.com'],
  admin: ['aruneshsinghrajawat@gmail.com'],
  manager: ['anshumanjha3333@gmail.com']
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // --- CHECK ROLE & REDIRECT LOGIC ---
  const checkRoleAndRedirect = async (currentUser: User) => {
    let role = 'user';
    
    // 1. Check Hardcoded List
    if(STAFF.super_admin.includes(currentUser.email || '')) role = 'super_admin';
    else if(STAFF.admin.includes(currentUser.email || '')) role = 'admin';
    else if(STAFF.manager.includes(currentUser.email || '')) role = 'manager';

    // 2. Check Database (Source of Truth)
    try {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().role) {
        role = docSnap.data().role;
      }
    } catch (e) {
      console.error("Error checking role:", e);
    }

    // 3. Redirect if Staff
    if (role !== 'user') {
      console.log(`Redirecting ${role} to dashboard...`);
      window.location.href = `/dashboard/${role === 'super_admin' ? 'admin' : role}.html`;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await checkRoleAndRedirect(currentUser);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // --- LOGIN FUNCTION ---
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // --- SIGNUP FUNCTION ---
  const signup = async (name: string, email: string, password: string, phone?: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    
    // Save User Data to Firestore
    await setDoc(doc(db, "users", cred.user.uid), {
      uid: cred.user.uid,
      name,
      email,
      phone: phone || '',
      role: 'user', // Default role is user
      createdAt: new Date().toISOString()
    });
  };

  // --- LOGOUT FUNCTION ---
  const logout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// src/components/AuthButtons.tsx
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthButtons() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user) {
    const name = user.displayName || user.email?.split("@")[0] || "User";
    return (
      <div className="fixed top-4 right-4 z-[9999] flex items-center gap-3 font-poppins">
        <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg border border-gray-200">
          <span className="font-semibold text-gray-800">
            Namaste, <span className="text-orange-600">{name.split(" ")[0]}</span> 🙏
          </span>
        </div>
        <a
          href="/dashboard"
          className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg"
        >
          Dashboard
        </a>
        <button
          onClick={() => signOut(getAuth()).then(() => location.reload())}
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] flex gap-3 font-poppins">
      <a
        href="/login.html"
        className="bg-transparent text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all shadow-lg"
      >
        Sign In
      </a>
      <a
        href="/login.html?mode=signup"
        className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg"
      >
        Sign Up
      </a>
    </div>
  );
}

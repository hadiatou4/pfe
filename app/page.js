'use client'
import Login from "./login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GoogleMapSection from "./components/container/Home/GoogleMapSection";
import SearchSection from "./components/container/Home/SearchSection";


export default function Home() {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('./dashboard');
      }
    });

    return () => unsubscribe(); 
  }, [auth, router]);

  return (
    <div className="maincontent" >
      <div>
        <SearchSection/>
      </div> 
      <div className="map">
        <GoogleMapSection/>
      </div>
      
    </div>
  );
}

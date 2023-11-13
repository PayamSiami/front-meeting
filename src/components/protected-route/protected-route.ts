// useAuth.js (custom hook)

import { getUser } from "@/store/features/user-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useAuth() {
  const router = useRouter();
  const { token } = useSelector(getUser);

  // Check if user is authenticated
  const isAuthenticated = token;

  useEffect(() => {
    // If user is not authenticated, redirect to login page
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
}

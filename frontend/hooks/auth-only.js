import { useRouter } from "next/router"
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider"

export const useProtected = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoading && !isLoggedIn) {
      router.push(`/auth/login?prev=${router.asPath}`);
    }
  }, [isLoading, isLoggedIn, router.asPath]);
}
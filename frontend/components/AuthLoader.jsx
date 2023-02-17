import { Spinner } from "reactstrap";
import { useAuth } from "../providers/AuthProvider";

export function AuthLoader({ children }) {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />
  }

  return children
}
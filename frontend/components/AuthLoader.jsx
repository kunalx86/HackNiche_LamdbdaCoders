import { NavbarBrand, Spinner } from "reactstrap";
import { useAuth } from "../providers/AuthProvider";

export function AuthLoader({ children }) {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <>
    <NavbarBrand href="#pablo" className="pt-0" style={{ width: "100%", height: "4rem", alignItems: "center", margin:"auto", justifyContent:"center", }}>
      <img
        alt={logo.imgAlt}
        className="navbar-brand-img"  
        src={logo.imgSrc}
        style={{ width: "250rem", height: "37rem",  }}
      />
    </NavbarBrand>
    <Spinner />
    </>
  }

  return children
}
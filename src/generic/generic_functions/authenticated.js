import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

export function not_authenticated() {
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authentificated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    if (isAuthenticated) {
      let navigate = useNavigate();
      navigate("/presentation");
      return { user_id: userId, role: userRole };
    }
    return null;
  }
}

export function authenticated() {
  let navigate = useNavigate();
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authentificated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    if (!isAuthenticated) {
      navigate("/presentation");
      return null;
    }
    return { user_id: userId, role: userRole };
  } else {
    navigate("/presentation");
    return null;
  }
}

export function attributes() {
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authentificated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    return { authenticated: isAuthenticated, user_id: userId, role: userRole };
  }
  return null;
}

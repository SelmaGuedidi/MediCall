import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export function not_authenticated() {
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authenticated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    if (isAuthenticated) {
      window.location.href = "/presenatation";
      return { user_id: userId, role: userRole };
    }
    return { authenticated: false, user_id: null, role: null };
  }
}

export function authenticated() {
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authenticated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    if (!isAuthenticated) {
      window.location.href = "/presenatation";
      return { authenticated: false, user_id: null, role: null };
    }
    return { user_id: userId, role: userRole };
  } else {
    //window.location.href = "/presenatation";
    return { authenticated: false, user_id: null, role: null };
  }
}

export function attributes() {
  if (Cookies.get("token")) {
    const decodedToken = jwt_decode(Cookies.get("token"));
    const isAuthenticated = decodedToken.authenticated;
    const userId = decodedToken.id;
    const userRole = decodedToken.role;
    return { authenticated: isAuthenticated, user_id: userId, role: userRole };
  }
  return { authenticated: false, user_id: null, role: "visiteur" };
}

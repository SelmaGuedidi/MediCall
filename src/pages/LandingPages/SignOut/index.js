import { useEffect } from "react";
import Cookies from "js-cookie";
const SignOutPage = () => {
  useEffect(() => {
    // clear JWT token cookie
    Cookies.remove("token");
    // redirect to sign-in page
    window.location.replace("http://localhost:3000/pages/authentication/sign-in");
    //window.location.href = "/pages/authentication/sign-in";
  }, []);

  return (
    <div>
      <p>You have been signed out.</p>
    </div>
  );
};

export default SignOutPage;

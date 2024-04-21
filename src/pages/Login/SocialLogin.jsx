import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { axiosPost } from "../../lib/axiosPost";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleAuth().then((result) => {
      const user = result.user;
      const saveUser = {
        name: user.displayName,
        email: user.email,
      };
      axiosPost("/api/users", saveUser)
        .then((data) => {
          // Handle the response
          console.log(data);
          const from = location.state?.from?.pathname || "/profile";
          navigate(from, { replace: true });
          toast.success("Successfully logged in.");
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    });
  };
  return (
    <div className="min-h-screen my-20 flex flex-col gap-5 items-center">
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="section-title"
      >
        You are not signed in.
      </h2>
      <button
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        onClick={handleGoogleSignIn}
        className="bg-gray-900 text-white h-12 w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
      >
        <span>
          <FcGoogle />
        </span>{" "}
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;

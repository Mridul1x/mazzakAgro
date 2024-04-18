import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleAuth().then((result) => {
      const user = result.user;
      const saveUser = {
        name: user.displayName,
        email: user.email,
      };
      fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/profile");
        });
    });
  };

  return (
    <div className="min-h-screen my-20 flex flex-col gap-5 items-center">
      <h2 className="section-title">You are not signed in.</h2>
      <button
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

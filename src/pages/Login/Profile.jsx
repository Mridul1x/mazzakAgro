import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import Overlay from "../../component/Overlay";

const Profile = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logout()
      .then(() => {
        navigate("/login"); // Navigate to the login page after successful logout
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <Overlay />;
  }

  return (
    <div className="min-h-screen my-20 flex flex-col gap-5 items-center">
      {user.photoURL && (
        <img
          src={user.photoURL}
          width={500}
          height={500}
          alt={user.displayName}
          className="h-32 w-32 rounded-full border-2 border-gray-900"
        />
      )}
      <h2 className="section-title">Welcome, {user.displayName}!</h2>
      <button
        onClick={handleLogOut}
        className="bg-gray-900 text-white h-12 w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
      >
        <span>
          <FiLogOut />
        </span>{" "}
        Sign out
      </button>
    </div>
  );
};

export default Profile;

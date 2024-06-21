import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";

const Logout = () => {
  const [signedOut, setSignedOut] = useState(false);

  useEffect(() => {
    const signOut = async () => {
      await doSignOut();
      setSignedOut(true);
    };

    signOut();
  }, []);

  if (signedOut) {
    return <Navigate to="/login" />;
  }

  return <div>Signing out...</div>;
};

export default Logout;

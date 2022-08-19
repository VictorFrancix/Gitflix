import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataContext from "../providers";
import SignUp from "./../pages/signup";
import SignIn from "./../pages/signin";

export default function Router() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <DataContext.Provider
      value={{
        open,
        setOpen,
        error,
        setError,
        message,
        setMessage,
        severity,
        setSeverity,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

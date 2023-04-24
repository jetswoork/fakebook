import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";
import { Loader } from "../components/Loader";
import { UseCheckAuth } from "../hooks/UseCheckAuth";

export const Router = () => {
  const { status } = UseCheckAuth();

  return (
    <Fragment>
      {status === "authenticated" ? <Navbar /> : null}
      <Routes>
        {status === "authenticated" ? (
          <>
            <Route path="/*" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/*" element={<Login />} />
        )}
      </Routes>
    </Fragment>
  );
};

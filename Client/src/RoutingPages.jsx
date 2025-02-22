import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Signin } from "./pages/signin/Signin";
import { Signup } from "./pages/signup/Signup";

export const RoutingPages = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import ContactItem from "../components/ContactItem";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<ContactForm />} />
      <Route path="/details/:id" element={<ContactItem />} />
    </Routes>
  );
};

export default MainRoutes;

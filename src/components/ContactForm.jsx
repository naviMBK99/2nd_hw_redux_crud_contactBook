import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/ContactSlice";

import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

const ContactForm = () => {
  const [contactName, setcontactName] = useState("");
  const [contactLastName, setcontactLastName] = useState("");
  const [contactPhone, setcontactPhone] = useState("");
  const [contactImg, setcontactImg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!contactName || !contactLastName || !contactPhone || !contactImg) {
      return;
    }
    dispatch(
      addContact({ contactName, contactLastName, contactPhone, contactImg })
    );
    setcontactName("");
    setcontactLastName("");
    setcontactPhone("");
    setcontactImg("");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Add Contacts Form</h1>
              <Input
                onChange={(e) => setcontactName(e.target.value)}
                value={contactName}
                type="text"
                placeholder="Name"
                className="mb-3"
              />
              <Input
                onChange={(e) => setcontactLastName(e.target.value)}
                value={contactLastName}
                type="text"
                placeholder="Last Name"
                className="mb-3"
              />
              <Input
                onChange={(e) => setcontactPhone(e.target.value)}
                value={contactPhone}
                type="text"
                placeholder="Phone Number"
                className="mb-3"
              />
              <Input
                onChange={(e) => setcontactImg(e.target.value)}
                value={contactImg}
                type="text"
                placeholder="URL"
                className="mb-3"
              />
              <Button onClick={handleClick} className="mb-3">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../store/ContactSlice";
import { Button, Input } from "@mui/material";
import { NavLink } from "react-router-dom";

const ContactList = ({
  contactName,
  contactLastName,
  contactPhone,
  contactImg,
}) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [newContactName, setNewContactName] = useState(contactName || "");
  const [newContactLastName, setNewContactLastName] = useState(
    contactLastName || ""
  );
  const [newContactPhone, setNewContactPhone] = useState(contactPhone || "");
  const [newContactImg, setNewContactImg] = useState(contactImg || "");
  const [editId, setEditId] = useState(null);

  const handleEdit = (elem) => {
    setNewContactName(elem.contactName);
    setNewContactLastName(elem.contactLastName);
    setNewContactPhone(elem.contactPhone);
    setNewContactImg(elem.contactImg);
    setEditId(elem.id);
  };

  const handleSave = (id) => {
    dispatch(
      editContact({
        id,
        newContactName: newContactName,
        newContactLastName: newContactLastName,
        newContactPhone: newContactPhone,
        newContactImg: newContactImg,
      })
    );
    setEditId(null);
  };

  return (
    <div className="container-list">
      <div className="row">
        <div className="col-md-6">
          {contacts.map((elem) => (
            <div key={elem.id} className="card mb-3">
              <img src={elem.contactImg} className="card-img-top" alt="" />
              <div className="card-body">
                {editId === elem.id ? (
                  <div>
                    <Input
                      value={newContactName}
                      onChange={(e) => setNewContactName(e.target.value)}
                      type="text"
                      placeholder="Name"
                      className="mb-2"
                    />
                    <Input
                      value={newContactLastName}
                      onChange={(e) => setNewContactLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                      className="mb-2"
                    />
                    <Input
                      value={newContactPhone}
                      onChange={(e) => setNewContactPhone(e.target.value)}
                      type="text"
                      placeholder="Phone Number"
                      className="mb-2"
                    />
                    <Input
                      value={newContactImg}
                      onChange={(e) => setNewContactImg(e.target.value)}
                      type="text"
                      placeholder="URL"
                      className="mb-2"
                    />
                    <Button
                      onClick={() => handleSave(elem.id)}
                      className="mb-2"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h5 className="card-title">{elem.contactName}</h5>
                    <p className="card-text">{elem.contactLastName}</p>
                    <p className="card-text">{elem.contactPhone}</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{/* Item */}</li>
                      <li className="list-group-item">{/* Item */}</li>
                      <li className="list-group-item">{/* Item */}</li>
                    </ul>
                    <div className="card-links">
                      <NavLink to={`/details/${elem.id}`} className="card-link">
                        DETAILS
                      </NavLink>
                      <Button
                        onClick={() => handleEdit(elem)}
                        className="card-link"
                      >
                        edit
                      </Button>
                      <Button
                        onClick={() => dispatch(deleteContact({ id: elem.id }))}
                        className="card-link"
                      >
                        delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;

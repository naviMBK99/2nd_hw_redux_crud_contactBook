import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ContactItem = () => {
  const { id } = useParams();
  const contactDetail = useSelector((state) =>
    state.contacts.contacts.find((elem) => elem.id === parseInt(id))
  );

  return (
    <div className="container mt-5">
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <h2 className="card-title">{contactDetail.contactName}</h2>
          <h3 className="card-subtitle mb-2 text-muted">
            {contactDetail.contactLastName}
          </h3>
          <h4 className="card-text">{contactDetail.contactPhone}</h4>
          <img src={contactDetail.contactImg} alt="" className="card-img-top" />
        </div>
      </div>
    </div>
  );
};

export default ContactItem;

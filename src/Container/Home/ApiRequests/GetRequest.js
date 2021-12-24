import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import CustModal from "../../../Components/Modal";
import Api from "../../../Api";

export default function GetRequest({ showModal, setShowModal }) {
  const [url, setUrl] = useState("");

  const handleRequest = () => {

    const OnSuccess = (response) => {
      if (response.data) console.log(response.data);
      else console.log("Cannot get Data");
    };

    const OnError = (error) => {
      console.log("Error :-", JSON.stringify(error));
    };

    url ? Api.GetRequest(url, OnSuccess, OnError) : console.error("please enter Url");
  };
  return (
    <CustModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Make Get Request"
      btnValue="Get"
      RequestFunction={handleRequest}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter URL :</Form.Label>
          <Form.Control
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="url"
          />
        </Form.Group>
      </Form>
    </CustModal>
  );
}

import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Api from "../../../Api";
import CustModal from "../../../Components/Modal";

export default function PutRequest({ showModal, setShowModal }) {
    const [url,setUrl] =useState("");
    const [postBody,setPostBody] =useState("");

    const handleRequest = () => {

        const OnSuccess = (response) => {
            if(response)
                console.log(response.status,response.data);
            else
                console.log("cannot update data");
        }

        const OnError = (error) => {
            console.log("Error :-",JSON.stringify(error));
        }

        url && postBody ? Api.PutRequest(url,postBody,OnSuccess,OnError) : console.error("Please enter url and body");
    }
  return (
    <CustModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Make Put Request"
      btnValue="Put"
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

        <Form.Group className="mb-3">
          <Form.Label>Enter Body</Form.Label>
          <Form.Control as="textarea" rows={3} value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        </Form.Group>
      </Form>
    </CustModal>
  );
}

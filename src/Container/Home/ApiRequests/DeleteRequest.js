import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap';
import Api from '../../../Api';
import CustModal from '../../../Components/Modal';

export default function DeleteRequest({showModal,setShowModal}) {
    const [url,setUrl] = useState("");

    const handleRequest =() => {

        
    const OnSuccess = (response) => {
        if(response)
        console.log(response.status,response.data);
        else
        console.log("Cannot delete data");
    }
    
    const OnError = (error) => {
        console.log("Error :-",error);
    }
    
    url ? Api.DeleteRequest(url,OnSuccess,OnError) :console.error("please enter Url");
}
    return (
        <CustModal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Make Delete Request"
      btnValue="Delete"
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
    )
}

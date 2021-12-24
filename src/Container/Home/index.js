import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Buttons from '../../Components/Button/index.js'
import NavBar from '../../Components/Navbar/index.js'
import DeleteRequest from './ApiRequests/DeleteRequest.js';
import GetRequest from './ApiRequests/GetRequest.js';
import PostRequest from './ApiRequests/PostRequest.js';
import PutRequest from './ApiRequests/PutRequest.js';

export default function Home() {

    const [openGetModal,setOpenGetModal] = useState(false);
    const [openPostModal,setOpenPostModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [openPutModal,setOpenPutModal] = useState(false);
    return (
        <>
          <NavBar title="Api Call" />
          <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"90vh"}}>
                <Buttons value="Make GET Request" onClickFunction={() => setOpenGetModal(true)} />
                <Buttons variant="warning" value="Make POST Request" onClickFunction={() => setOpenPostModal(true)} />
                <Buttons variant="danger" value="Make DELETE Request" onClickFunction={() => setOpenDeleteModal(true)} />
                <Buttons variant="success" value="Make PUT Request" onClickFunction={() => setOpenPutModal(true)} />
        </div>  

        <GetRequest showModal={openGetModal} setShowModal={setOpenGetModal} />
        <PostRequest showModal={openPostModal} setShowModal={setOpenPostModal} />
        <DeleteRequest showModal={openDeleteModal} setShowModal={setOpenDeleteModal} />
        <PutRequest showModal={openPutModal} setShowModal={setOpenPutModal} />
        </>
    )
}

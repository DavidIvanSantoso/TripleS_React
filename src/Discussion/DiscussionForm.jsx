import { Container,Row,Col } from "react-bootstrap"
import NavbarTop from "../Navbar/Navbar"
import { useState,useEffect } from "react";
import './discussion.css'
//bootstrap components
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { Pagination } from 'react-bootstrap';
//axios
import axios from "axios";



function FormDiscussion(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments,setComments]=useState([]);

    //modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // form input   
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
     
    //date formater
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      }

    //pagination
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    // const commentsPerPage = 5;

     // Function to handle page changes
    // const handlePageChange = (pageNumber) => {
    //     setPage(pageNumber);
    // };
   
        const getCommentsAPI= async ()=>{
            // try {
            //     const resp = await axios.get(
            //       `https://66f57e9e4ff096dbc7549f85.mockapi.io/tripleSReact/comments?page=${page}&limit=${commentsPerPage}`
            //     );
            //     setComments(resp.data);
        
            //     // Ensure x-total-count exists and is valid
            //     const totalComments = parseInt(resp.headers["x-total-count"], 10);
            //     if (!isNaN(totalComments)) {
            //       setTotalPages(Math.ceil(totalComments / commentsPerPage)); // Correct total pages calculation
            //     } else {
            //       setTotalPages(1); // Default to 1 page if total count is invalid
            //     }
            //   } catch (err) {
            //     console.error("API FAILED", err);
            //     setTotalPages(1); // Set to 1 page in case of error
            //   }
            try{
                const resp=await axios.get('https://66f57e9e4ff096dbc7549f85.mockapi.io/tripleSReact/comments')
                setComments(resp.data)
                // setTotalPages(Math.ceil(resp.headers['x-total-count'] / commentsPerPage));
                console.log(resp.data)
            }
            catch(err){
                console.log("API FAILED",err)
            }
        }
        useEffect(() => {
            getCommentsAPI();;
          }, []);
        

    const handleFormInput=async(event)=>{
        event.preventDefault();
        try {
             
            // Send POST request to API
            const newComment = { username, comment, date: new Date().toISOString() }; // Prepare the data
            await axios.post("https://66f57e9e4ff096dbc7549f85.mockapi.io/tripleSReact/comments", newComment);
            closeModal(); // Close modal after submission
            setUsername(""); // Clear input fields
            setComment("");
            closeModal()
            getCommentsAPI(); // Refresh comments
          } catch (error) {
            console.error("Error posting comment:", error);
          }
    }
    
    return(
        <>
            <NavbarTop></NavbarTop>
            <Container fluid className="mt-5">
                <Row>
                    <Col xs={3}>
                        <h1>Discussion</h1>
                    </Col>
                    <Col className="d-inline-block align-center" xs={8}>
                        <Button variant="primary" onClick={openModal}>Add Comments</Button>
                    </Col>
                </Row>
                {comments.map((data)=>(
                    <div key={data.id} className="commentBox" style={{'backgroundColor':'white', 'border':"5px solid black", 'borderRadius':"10px","color":'black','padding':'6px'}}>
                    <Row>
                        <Row>
                            <Col xs={3}>
                                <h5>{data.username}</h5>
                            </Col>
                            <Col xs={7}>
                                <p>Date: {formatDate(data.date)} </p>
                            </Col>
                            <Col xs={2}>
                                <CloseButton ></CloseButton>
                            </Col>
                        </Row>
                        <Row>
                            <p>{data.comment}</p>
                        </Row>
                    </Row>
                </div>
                ))}

            {/* <Pagination>
                    <Pagination.First onClick={() => handlePageChange(1)} disabled={page === 1} />
                    <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
                    {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item key={idx} active={idx + 1 === page} onClick={() => handlePageChange(idx + 1)}>
                        {idx + 1}
                    </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={page === totalPages} />
                </Pagination> */}
                
            </Container>

            <Modal show={isModalOpen} onHide={closeModal} style={{color:'black'}}>
                <Modal.Header closeButton>
                <Modal.Title>Write Your Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleFormInput}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Insert Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Comment...." value={comment} onChange={(e) => setComment(e.target.value)} />
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleFormInput}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default FormDiscussion
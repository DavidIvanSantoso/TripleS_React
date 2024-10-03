import { Container,Row,Col } from "react-bootstrap"
import NavbarTop from "../Navbar/Navbar"
import { useState,useEffect } from "react";
import './discussion.css'
//bootstrap components
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Spinner from "react-bootstrap/Spinner";
// import { Pagination } from 'react-bootstrap';
//axios
import axios from "axios";

//transition
import { CSSTransition } from 'react-transition-group';
import './FadeAnimation.css'; // Import CSS for fade animation


function FormDiscussion(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments,setComments]=useState([]);

    //modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // form input   
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(true);

     // This state controls visibility for animation
     const [visibleComments, setVisibleComments] = useState([]);

    //date formater
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      }

        const getCommentsAPI= async ()=>{
            try{
                const resp=await axios.get('https://66f57e9e4ff096dbc7549f85.mockapi.io/tripleSReact/comments')
                setComments(resp.data)
                setVisibleComments(resp.data);
                // setTotalPages(Math.ceil(resp.headers['x-total-count'] / commentsPerPage));
                console.log(resp.data)
            }
            catch(err){
                console.log("API FAILED",err)
            }
            finally{
                setIsLoading(false)
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
    const handleDeleteComment=async(id)=>{
        try{
            // Start fade-out animation
            setVisibleComments((prev) =>
                prev.map((c) => (c.id === id ? { ...c, isVisible: false } : c))
            );
            await axios.delete(`https://66f57e9e4ff096dbc7549f85.mockapi.io/tripleSReact/comments/${id}`)
             // Remove the comment from state after deletion
             setVisibleComments((prev) => prev.filter((c) => c.id !== id));
            console.log("SUCCESS")
        }
        catch(error){
            console.log("ERROR",error)
        }
    };

    return(
        <>
            <NavbarTop></NavbarTop>
            <Container fluid className="mt-5">
            <Row className="align-items-center">
                <Col xs={6} sm={3} className="mb-3 mb-sm-0">
                    <h1>Discussion</h1>
                </Col>
                <Col xs={6} sm={8} className="text-sm-end text-center">
                    <Button variant="primary" onClick={openModal}>Add Comments</Button>
                </Col>
            </Row>
                {isLoading? 
                     (
                        <div className="d-flex justify-content-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      )
                :(visibleComments.map((data)=>(
                    <CSSTransition
                    key={data.id}
                    in={data.isVisible !== false}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                     > 
                    <div key={data.id} className="commentBox" style={{'backgroundColor':'white', 'border':"5px solid black", 'borderRadius':"10px","color":'black','padding':'6px'}}>
                    <Row className="align-items-center">
                        <Col xs={9} className="d-flex">
                            <h5 className="me-3">{data.username}</h5>
                            <p className="mb-0">Date: {formatDate(data.date)}</p>
                        </Col>
                        <Col xs={3} className="text-end">
                            <CloseButton onClick={()=>handleDeleteComment(data.id)}/>
                        </Col>
                        </Row>
                        <Row>
                            <p>{data.comment}</p>
                        </Row>
                </div>
                </CSSTransition>
                ))
                )}

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

import { COMMENTS } from '../shared/comments';
import { useState} from 'react';
import { Button, Modal} from 'react-bootstrap'

export default function CommentForm(props) {

    // handle modal
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handleChange

    const [state, setState] = useState({
        rating: '5',
        name: '',
        comment: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({...state,[name]: value})
        
    }

    // handle submit

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        props.addComment(props.dishID,state.rating,state.name,state.comment)
        
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Submit Comment
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Commnent</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='container'>
            <form onSubmit={handleSubmit}>
            <div className='row'>
            <label>Rating</label>
            <select onChange={handleChange} name='select'>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            </select>
            
            <label>Your Name</label>
            <input type='text' name='name' onChange={handleChange} />
            </div>
            <div className='row'>
            <label>Comment: </label>
            <textarea onChange={handleChange} name="comment" cols="50" rows="10"></textarea>
            </div>
            </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

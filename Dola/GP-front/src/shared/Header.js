

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import coin from "../componenet/coins.png"


import "../css/Header.css";

const Header = () => {

    
    return ( 
        <div className='header'>
        <Navbar >
        
          <h1 href="#home" className='logo'>Logo</h1>
        
          <Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control
            style={{"border-radius":"25px" ,"height":"30px" ,"width":"180px"}}
              type="text"
              placeholder="Search"
              // className=" mr-sm-2"
              
            />

          </Col>
        </Row>
          </Form>
          <div className='navContent'>
          <Nav className="me-auto">
            <Link style={{"color":"white", "padding-left":"50px"}} className="nav-link" to={"/"}>Home</Link>
            <Link style={{"color":"white" , "padding-left":"50px"}} className="nav-link" to={"/login"}>Available Games</Link>
            <Link style={{"color":"white", "padding-left":"50px"}} className="nav-link" to={"/register"}>About</Link>
            <Link style={{"color":"white", "padding-left":"50px"}} className="nav-link" to={"/"}>Contact</Link>
          </Nav>
          </div>
          <Nav className="ms-auto">
           <div className='badge' >
          <img alt='coins' src={coin}/>
          <p style={{"margin-top":"-18px"}}>1500</p>
        </div>
          </Nav>
        
      </Navbar>
        </div>
     );
}
 
export default Header;

import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';
import './Header.css'
import { authContext } from '../AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';


const Header = () => {

    const {logOut,user} = useContext(authContext)

    const handleLogout = () =>{
        logOut()
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar  bg="info" variant="info">
                <Container >
                    <Navbar.Brand className='fw-bold text-white fs-2'><FaBookReader></FaBookReader> RM Learning Point</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='links m-3 text-white'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/courses'}>Courses</Link>
                            <Link to={'/Blog'}>Blog</Link>
                            <Link to={'/register'}>Register</Link>
                          
                            {user?.uid?
                                <Button onClick={handleLogout} variant='light' className='ms-3 fw-bold'>Log Out</Button>
                            :
                            <Link to={'/login'}>Login</Link>}


                            
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
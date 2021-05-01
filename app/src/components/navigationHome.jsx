import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Maalem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className='ml-auto'>
                <Nav.Link href="http://localhost:9000/auth/google" >CONNECTEZ-VOUS</Nav.Link> 
            </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

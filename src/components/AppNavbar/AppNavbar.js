import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class AppNavbar extends Component {
    state = {
      isOpen: false,
    }
 toggle = () => {
     this.setState({
         isOpen: !this.state.isOpen
     })
 }
 render() {



    return (
        <div style={{position : "fixed", top : "0", width: "100%",zIndex: '5'}}>
            <Navbar color='dark'  dark expand='sm' className='mb-lg-0' >
                 <Container>
                     <NavbarBrand href='/' >Shopping List</NavbarBrand>
                     <NavbarToggler onClick={this.toggle} />
                     <Collapse isOpen={this.state.isOpen} navbar>
                         <Nav className="md-5" navbar >
                             <NavItem>
                                 <NavLink href='https://ovsianykov-react-portfolio.netlify.app/'>
                                     Portfolio
                                 </NavLink>
                             </NavItem>
                         </Nav>
                     </Collapse>
                 </Container>
            </Navbar>
        </div>
    )


 }
}

export default AppNavbar;

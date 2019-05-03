import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="Header">
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Charity</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Hotel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Dealers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

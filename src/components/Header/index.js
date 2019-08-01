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
import withData from '../withData';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

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
    const {
      data,
      location: { pathname }
    } = this.props;

    return (
      <div className="Header">
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {data &&
                data.map((element, key) => {
                  const external = 'http' === element.link_to.substr(0, 4);

                  console.log(element);
                  return (
                    <NavItem key={key}>
                      {external ? (
                        <NavLink
                          className={
                            pathname === element.link_to ? 'active' : ''
                          }
                          href={element.link_to}
                          target={element.openInNewTab ? '_blank' : '_self'}
                        >
                          {element.title}
                        </NavLink>
                      ) : (
                        <Link
                          to={element.link_to}
                          className={`${
                            pathname === element.link_to ? 'active' : ''
                          } nav-link`}
                        >
                          {element.title}
                        </Link>
                      )}
                    </NavItem>
                  );
                })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withData(withRouter(Header), {
  content_type: 'menus',
  sort: 'order:ASC',
  static: true
});

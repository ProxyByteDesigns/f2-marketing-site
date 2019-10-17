import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import useData from '../../hooks/useData';

function Header({ location: { pathname } }) {
  const [isOpen, setOpen] = useState(false);

  const [status, error, isLoading, data] = useData('menus', {
    sort: 'order:ASC',
    static: true
  });

  return (
    <div className="Header">
      <Navbar expand="md">
        <NavbarToggler
          onClick={() => {
            setOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {data &&
              data.map((element, key) => {
                const external = 'http' === element.link_to.substr(0, 4);

                return (
                  <NavItem key={key}>
                    {external ? (
                      <NavLink
                        className={pathname === element.link_to ? 'active' : ''}
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

export default withRouter(Header);

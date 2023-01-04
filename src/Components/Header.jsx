import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link>
          <Link to='/'>
            <BiArrowBack></BiArrowBack>
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;

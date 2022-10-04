import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' /> 
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - Jatou Gaye 2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

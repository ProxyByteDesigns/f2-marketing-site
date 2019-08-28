import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import routes from './routes';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './App.css';
import ChatBot from './components/ChatBot';
import Header from './components/Header';
import Footer from './components/Footer';
import backgroundMovie from 'assets/background.mp4';
import styled from 'styled-components';

const StyledVideo = styled.video`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  background-size: contain;
`;

const StyledSource = styled.source`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: contain;
`;

const options = {
  position: 'top right',
  timeout: 5000,
  offset: '60px 30px',
  transition: 'scale'
};

function App() {
  return (
    <div className="App">
      <Helmet titleTemplate="%s | Fur Squared">
        <title>Home</title>
      </Helmet>
      <Header />
      <StyledVideo autoPlay muted loop>
        <StyledSource src={backgroundMovie} type="video/mp4" />
      </StyledVideo>
      <Row className="no-gutters">
        <Col xs={12} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <AlertProvider template={AlertTemplate} {...options}>
            <Container fluid className="app-container">
              <Switch>{routes}</Switch>
            </Container>
          </AlertProvider>
        </Col>
        <Footer />
        <ChatBot />
      </Row>
    </div>
  );
}

export default App;

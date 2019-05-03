import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import routes from './routes';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './App.css';
import ChatBot from './components/ChatBot';

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
      <Row className="no-gutters">
        <Col xs={12} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <AlertProvider template={AlertTemplate} {...options}>
            <Container fluid className="app-container">
              <Switch>{routes}</Switch>
            </Container>
          </AlertProvider>
        </Col>
        <ChatBot />
      </Row>
    </div>
  );
}

export default App;

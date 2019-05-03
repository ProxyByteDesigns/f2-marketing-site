import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
  Button,
  InputGroupAddon
} from 'reactstrap';
import './ChatBot.css';
import Cookies from 'universal-cookie';

const MESSAGES = [
  '...user connecting',
  'Anonymous: Are you receiving this?',
  "Anonymous: I don't have much time.",
  'Anonymous: I have information you need to share with the world.',
  'Connected Terminated by systemd. Incident has been reported.'
];

class ChatBot extends Component {
  timeout = null;

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      availableMessages: MESSAGES,
      messages: [],
      disconnect: false,
      message: ''
    };
  }

  componentDidMount() {
    const cookies = new Cookies();

    const stage = cookies.get('f2_chat_bot_stage');

    if (!stage || stage === 0) {
      this.timeout = setTimeout(() => {
        this.popMessage();
      }, 1000);

      cookies.set('f2_chat_bot_stage', 1);
    }
  }

  popMessage = () => {
    clearTimeout(this.timeout);

    const { availableMessages, messages } = this.state;

    this.timeout = setTimeout(() => {
      if (availableMessages.length > 0) {
        let newMessage = availableMessages.shift();

        this.setState(
          {
            show: true,
            messages: [...messages, newMessage],
            availableMessages
          },
          () => {
            this.popMessage();
          }
        );
      } else {
        this.setState(
          {
            disconnect: true
          },
          () => {
            this.timeout = setTimeout(() => {
              this.setState({
                show: false
              });
            }, 6000);
          }
        );
      }
    }, 2100);
  };

  closeChat = () => {
    this.setState({
      show: false
    });
  };

  onMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  onSubmit = () => {
    const { messages, message } = this.state;
    this.setState({
      messages: [...messages, message],
      message: ''
    });
  };

  render() {
    const { messages, disconnect, message, show } = this.state;

    if (!show) {
      return null;
    }

    return (
      <div className="ChatBot">
        <Card className="frame">
          <CardBody>
            {messages.map((message, key) => {
              return <p key={key}>{message}</p>;
            })}
          </CardBody>
          <CardFooter>
            <InputGroup>
              <Input
                placeholder="message"
                onChange={this.onMessage}
                value={message}
              />
              <InputGroupAddon addonType="append">
                <Button onClick={this.onSubmit} color="secondary">
                  Send
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default ChatBot;

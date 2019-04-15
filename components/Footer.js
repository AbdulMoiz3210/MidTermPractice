

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class Footer1 extends Component {
  render() {
    return (
 <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text >Email: abdulmoiz3210@gmail.com</Text>
            </Button>
            <Button>
              <Text>Phone Number: 03069079397</Text>
            </Button>
            
           
          </FooterTab>
        </Footer>
        </Container>
    );
  }
}



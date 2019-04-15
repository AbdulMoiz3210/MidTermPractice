import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class Header1 extends Component {
  render() {
    return (
     <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Abdul Moiz</Title>
          </Body>
          <Right />
        </Header>
        </Container>
    );
  }
}

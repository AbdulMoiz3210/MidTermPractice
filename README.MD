import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}


import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Email: abdulmoiz3210@gmail.com</Text>
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

import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class Accordion extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}


import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Accordian from './Accordian';

class Basic extends Component
{
    render(){
        return(
            <ScrollView>
            <Header/>
            <Accordian/>
            <Footer/>
            </ScrollView>
        );
        }
    }

export default Basic;



import {AppRegistry} from 'react-native';
import Basic from './components/Basic';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Basic);


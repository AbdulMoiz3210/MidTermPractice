import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Primary Education", content: "The Educators" },
  { title: "Secondary Education", content: "DJ sindh Govt College" },
  { title: "Degree", content: "BSCS from MAJU" }
];
export default class Accordion1 extends Component {
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
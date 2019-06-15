import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class education extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>Education</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                Graduation from Mohammad Ali Jinnah University
                FSc from Sindh Muslim Government Science College
                School V.M Public School
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button dark bordered
            onPress= {() => {Actions.pop(); }}>
            <Text>Home</Text>
         </Button>
        </Content>
      </Container>
    );
  }
}
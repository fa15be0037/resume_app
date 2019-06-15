import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class experience extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>Experience</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                Final Year Project on Blockchain technology
                Resume Application on react native.
                </Text>
              </Body>
            </CardItem>
          </Card>
      
         <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
            onPress= {() => {Actions.education(); }}>
            <Text>Education</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
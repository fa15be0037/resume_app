import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Objectives extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>Niaz Babar Bahadur</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button dark bordered style = {{alignSelf: 'center', margin: 30}}
            onPress= {() => {Actions.experience(); }}>
            <Text>Experience</Text>
          </Button>
         </Content>
      </Container>
    );
  }
}
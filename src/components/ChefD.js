import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import block_o from '../images/block_o.png';

const Wrapper = styled.section`
  padding: 4em;
  background: lightblue;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  padding-bottom: 0.5em;
`;

const Info = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding-top: 1em;
`;

class ChefD extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Chef D
        </Title>
        <Info>
          Food pics to come.
        </Info>
       <Carousel pictures={[block_o]}/>
      </Wrapper>
    );
  }
}

export default ChefD;
